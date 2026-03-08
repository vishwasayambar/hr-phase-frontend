import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { Tenant } from "../models/tenant";
import { ApiService } from "./api.service";
import { StorageService } from "./storage.service";

@Injectable({
	providedIn: "root"
})
export class ConfigService {
	private appConfigSubject$ = new BehaviorSubject<any>({});
	public appConfig$ = this.appConfigSubject$.asObservable().pipe(distinctUntilChanged());

	constructor(
		protected api: ApiService,
		protected storageService: StorageService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
	}

	load(): Promise<any> {
		return new Promise(resolve => {
			const url = window.location.href.toLowerCase();
			if (
				url.includes("signup") ||
				url.includes("login") ||
				url.includes("auth")
			) {
				return resolve(true);
			} else {
				this.api.get("accounts/getTenantDetails").subscribe({
					next: (tenant: Tenant) => {
						this.setAppConfig(tenant);
						if (window.location.href.includes("/errors/maintenance")) {
							this.router.navigate(["/auth/login"]);
						}
						resolve(true);
					},
					error: (error) => {
						if (error.status === 412) {
							this.router.navigate(["/auth/tenantLogin"]);
						} else if (error instanceof HttpErrorResponse && error.status === 503) {
							this.router.navigate(["/errors/maintenance"]);
						}
						resolve(true);
					}
				});
			}
		});
	}

	setAppConfig(tenant: Tenant): void {
		this.storageService.setTenant(tenant);
		this.appConfigSubject$.next(tenant);
	}
}
