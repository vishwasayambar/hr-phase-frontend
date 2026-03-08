import { Injectable } from "@angular/core";
import { Employee } from "../models/employee";
import { Tenant } from "../models/tenant";

@Injectable({providedIn: "root"})
export class StorageService {
	setUser(user: Employee): void {
		localStorage.setItem("currentUser", JSON.stringify(user));
	}

	getUser(): any {
		const data = localStorage.getItem("currentUser");
		return data ? JSON.parse(data) : null;
	}

	removeUser(): void {
		localStorage.removeItem("currentUser");
	}

	getTenant(): Tenant | null {
		const data = localStorage.getItem("tenant");
		return data ? JSON.parse(data) : null;
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
		return !!token;
	}


	loggedIn(): boolean {
		return this.isValid();
	}

	setPermissions(permissions: Array<string>): void {
		localStorage.setItem("permissions", JSON.stringify(permissions));
	}

	getPermissions(): Array<string> {
		const data = localStorage.getItem("permissions");
		return data ? JSON.parse(data) : [];
	}

	removePermissions(): void {
		localStorage.removeItem("permissions");
	}

}
