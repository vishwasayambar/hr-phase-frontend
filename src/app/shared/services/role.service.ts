import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ROLE_PATH } from "../constants/constant";
import { Role } from "../models/role";
import { ApiService } from "./api.service";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: "root",
})
export class RoleService extends BaseService<Role, number> {
    private endpoint = ROLE_PATH;

    constructor(protected override api: ApiService) {
        super(api, ROLE_PATH);
    }

    set(role: string): void {
        localStorage.setItem("qwerty", btoa(role));
    }

    get(): string {
        return atob(localStorage.getItem("qwerty"));
    }

    getRoles(): Observable<any> {
        return this.api.get(this.endpoint + "/getRoles");
    }

    remove(): void {
        localStorage.removeItem("qwerty");
    }
}
