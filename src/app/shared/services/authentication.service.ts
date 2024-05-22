import { Injectable } from "@angular/core";
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
    protected loggedIn = new BehaviorSubject<boolean>(this.storageService.loggedIn());
    authStatus = this.loggedIn.asObservable();

	constructor(
		protected api: ApiService,
        private storageService: StorageService,
        private configService: ConfigService,
	) {
      this.currentUserSubject = new BehaviorSubject<Employee | null>(this.storageService.getUser());
      this.currentUser = this.currentUserSubject.asObservable();
	}

	verifyActivationToken(data: object): Observable<any> {
		return this.api.getWithParams(this.endpoint + "verifyToken", data);
	}

	activateAccount(data: object): Observable<any> {
		return this.api.post(this.endpoint + "accountActivate", data);
	}

	setUserSession(user: Employee, accessToken: string, permissions: string | any[], tenant: Tenant): void {
		this.currentUserSubject.next(user);
		this.storageService.setUser(user);
		this.storageService.setToken(accessToken);
		// this.currentPermissionSubject.next(permissions);
		// this.storageService.setPermissions(permissions);
		// this.permissionService.loadPermissions(permissions);
		this.changeAuthStatus(true);
		// this.updateCurrentRole(user.roles[0]);
		// Sets customer data to firestore on login
      this.configService.setAppConfig(tenant)
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

  public get currentUserValue(): Employee | null {
    return this.currentUserSubject.value;
  }

  changeAuthStatus(value: boolean): void {
    this.loggedIn.next(value);
  }

}
