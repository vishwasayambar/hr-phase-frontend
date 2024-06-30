import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { AUTH_PATH } from "../constants/constant";
import { Employee } from "../models/employee";
import { Tenant } from "../models/tenant";
import { ApiService } from "./api.service";
import { ConfigService } from "./config.service";
import { StorageService } from "./storage.service";

@Injectable({
	providedIn: "root"
})
export class AuthenticationService {
	protected endpoint = AUTH_PATH;
    protected currentUserSubject: BehaviorSubject<Employee | null>;
    public currentUser: Observable<Employee | null>;
	protected currentPermissionSubject: BehaviorSubject<string[]>;
	public currentPermission: Observable<any>;
	public redirectUrl: string;
    protected loggedIn = new BehaviorSubject<boolean>(this.storageService.loggedIn());
    authStatus = this.loggedIn.asObservable();

	constructor(
		protected api: ApiService,
        private storageService: StorageService,
        private configService: ConfigService,
		private router: Router,
	) {
      this.currentUserSubject = new BehaviorSubject<Employee | null>(this.storageService.getUser());
      this.currentUser = this.currentUserSubject.asObservable();
	  this.currentPermissionSubject = new BehaviorSubject(this.storageService.getPermissions());
	  this.currentPermission = this.currentPermissionSubject.asObservable();
	}

	verifyActivationToken(data: object): Observable<any> {
		return this.api.getWithParams(this.endpoint + "verifyToken", data);
	}

	activateAccount(data: object): Observable<any> {
		return this.api.post(this.endpoint + "accountActivate", data);
	}

	setUserSession(user: Employee, accessToken: string, permissions: string[], tenant: Tenant): void {
		this.currentUserSubject.next(user);
		this.storageService.setUser(user);
		this.storageService.setToken(accessToken);
		this.currentPermissionSubject.next(permissions);
		this.storageService.setPermissions(permissions);
		this.changeAuthStatus(true);
		// this.updateCurrentRole(user.roles[0]);
		// Sets customer data to firestore on login
      this.configService.setAppConfig(tenant)
		this.router.navigate(["/dashboard"]).then(r => true );
		//
		// if (!tenant.is_completed_wizard_setup) {
		// 			this.router.navigate(["/setups"]);
		// 		}else{
		// }
		// this.configService.appConfig$.subscribe(tenant => {
		// 	if (!tenant["is_completed_wizard_setup"]) {
		// 		this.router.navigate(["/setups"]);
		// 	} else {
		// 		if (this.redirectUrl) {
		// 			this.router.navigate([this.redirectUrl]);
		// 			this.redirectUrl = "";
		// 		} else {
		// 			if (permissions.includes(PERMISSION_LIST.JOB_LIST)) {
		// 				this.router.navigate(["/jobs"]);
		// 			} else {
		// 				this.router.navigate(["/dashboards"]);
		// 			}
		// 		}
		// 	}
		// });
	}

	login(data: object): Observable<any> {
		return this.api.post(this.endpoint + "login", data);
	}

	logout(): Observable<any> {
		return this.api.get("logout");
	}

	clearUserSession(): void {
		this.currentUserSubject.next(null);
		this.storageService.removeUser();
		this.storageService.removeToken();
		this.storageService.removePermissions();
		this.changeAuthStatus(false);
		// this.roleService.remove();
	}


	public get currentUserValue(): Employee | null {
    return this.currentUserSubject.value;
  }

  changeAuthStatus(value: boolean): void {
    this.loggedIn.next(value);
  }

	// updateCurrentRole(role: Role): void {
	// 	if (role && role.hasOwnProperty("name")) {
	// 		this.role.next(role.name);
	// 		this.roleService.set(role.name);
	// 	}
	// }

}
