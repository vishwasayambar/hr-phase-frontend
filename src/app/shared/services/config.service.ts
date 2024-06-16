import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { setThrowInvalidWriteToSignalError } from "@angular/core/primitives/signals";
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
			console.log(window.location.href.toLocaleLowerCase().includes("auth"));
			if (
				window.location.href.toLocaleLowerCase().includes("signup") ||
				window.location.href.toLocaleLowerCase().includes("login") ||
				window.location.href.toLocaleLowerCase().includes("auth")
			) {
				return resolve(true);
			} else {
				this.api.get("accounts/getTenantDetails").subscribe(
					(tenant: Tenant) => {
						this.setAppConfig(tenant);
						if (window.location.href.includes("/errors/maintenance")) {
							this.router.navigate(["/auth/login"]);
						}
						resolve(true);
					},
					error => {
						if (error.status === 412) {
							// In case of invalid domain we will redirect user to tenant login
							this.router.navigate(["/auth/tenantLogin"]);
							resolve(true);
						} else if (error instanceof HttpErrorResponse && error.status === 503) {
							this.router.navigate(["/errors/maintenance"]);
							resolve(true);
						}
						return setThrowInvalidWriteToSignalError(error);
					}
				);
			}
		});
	}

	setAppConfig(tenant: Tenant): void {
		this.storageService.setTenant(tenant);
		this.appConfigSubject$.next(tenant);
	}
}
