import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EMPLOYEE_PATH } from "../constants/constant";
import { Employee } from "../models/employee";
import { ApiService } from "./api.service";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: "root",
})
export class EmployeeService extends BaseService<Employee, number> {
    private endpoint = EMPLOYEE_PATH;

    constructor(protected override api: ApiService) {
        super(api, EMPLOYEE_PATH);
    }

    getEmployeeList(): Observable<any> {
        return this.api.get(this.endpoint + "/getEmployeeList");
    }
    
    updateStatus(params: { user_id: number, status: boolean }): Observable<any> {
        return this.api.patch(this.endpoint + "/" + `updateStatus/${params.user_id}`, params);
    }
    
    me(): Observable<any> {
        return this.api.get(this.endpoint + "/" + "me");
    }

    updateRole(id: number, params: object): Observable<any> {
        return this.api.patch(this.endpoint + `/updateRole/${id}`, params);
    }

    updateEmail(employeeId: number, params: object): Observable<any> {
        return this.api.patch(this.endpoint + `/updateEmail/${employeeId}`, params);
    }

    activities(employeeId: number): Observable<any> {
        return this.api.get(this.endpoint + `/${employeeId}/activities`);
    }

    toggleActivation(employeeId: number): Observable<any> {
        return this.api.patch(this.endpoint + `/toggleActivation/${employeeId}`);
    }
}
