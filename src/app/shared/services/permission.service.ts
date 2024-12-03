import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { BaseService } from "./base.service";
import {Permission} from "../models/permission";
import {PERMISSION_PATH} from "../constants/constant";

@Injectable({
    providedIn: "root",
})
export class PermissionService extends BaseService<Permission, number> {
    endpoint = PERMISSION_PATH;

    constructor(protected override api: ApiService) {
        super(api, PERMISSION_PATH);
    }

    getAll(): Observable<Array<Permission>> {
        return this.api.get(this.endpoint);
    }

    getByRoleId(roleId: number): Observable<Array<Permission>> {
        return this.api.get(this.endpoint + `/getByRoleId/${roleId}`);
    }

    getByUserId(userId: number): Observable<Array<Permission>> {
        return this.api.get(this.endpoint + `/getByUserId/${userId}`);
    }
    
    updateUserDirectPermission(userId: number, permissions: {}): Observable<Array<Permission>> {
        return this.api.put(this.endpoint + `/updateUserDirectPermission/${userId}`, permissions);
    }
    
    assignPermissionsToRole(roleId: number, permissions: {}): Observable<Array<Permission>> {
        return this.api.put(this.endpoint + `/assignPermissionsToRole/${roleId}`, permissions);
    }

}
