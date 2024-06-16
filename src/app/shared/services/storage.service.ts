import { Injectable } from "@angular/core";
// import { ENTITIES } from "../constants/constants";
// import { Customer } from "../models/customer";
// import { Employee } from "../models/employee";
import { Tenant } from "../models/tenant";

@Injectable({providedIn: "root"})
export class StorageService {
	// setUser(user: Customer | Employee): void {
	// 	localStorage.setItem("currentUser", JSON.stringify(user));
	// }

	getUser(): any {
		return JSON.parse(localStorage.getItem("currentUser"));
	}

	removeUser(): void {
		localStorage.removeItem("currentUser");
	}

	getTenant(): Tenant {
		return JSON.parse(localStorage.getItem("tenant"));
	}

	setTenant(tenant: Tenant): void {
		localStorage.setItem("tenant", JSON.stringify(tenant));
	}

	removeTenant(): void {
		localStorage.removeItem("tenant");
	}

	setToken(token: string): void {
		localStorage.setItem("token", token);
	}

	getToken(): string {
		return localStorage.getItem("token");
	}

	setSidebarState(isLocked: boolean): void {
		localStorage.setItem("isLockedSidebar", String(isLocked));
	}

	getSidebarState(): boolean {
		const currentVal = localStorage.getItem("isLockedSidebar");
		return currentVal ? currentVal.toLowerCase() === "true" : false;
	}

	removeToken(): void {
		localStorage.removeItem("token");
	}

	isValid(): boolean {
		const token = this.getToken();
		if (token) {
			const payload = this.payload(token);
			if (payload) {
				// return Object.values(this.iss).indexOf(payload.iss) > -1
				//     ? true
				//     : false;
				return true;
			}
		}

		return false;
	}

	payload(token: string): string {
		const payload = token.split(".")[1];

		return this.decode(payload);
	}

	decode(payload: string): string {
		return JSON.parse(atob(payload));
	}

	loggedIn(): boolean {
		return this.isValid();
	}

	setPermissions(permissions: Array<string>): void {
		localStorage.setItem("permissions", JSON.stringify(permissions));
	}

	getPermissions(): string {
		return JSON.parse(localStorage.getItem("permissions"));
	}

	removePermissions(): void {
		localStorage.removeItem("permissions");
	}

	// clearCache(): void {
	// 	Object.values(ENTITIES).forEach(entity => {
	// 		if (entity?.name) {
	// 			localStorage.removeItem(entity?.name);
	// 		}
	// 	});
	// }
}
