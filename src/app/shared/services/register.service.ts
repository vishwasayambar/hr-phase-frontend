import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { REGISTRATION_PATH } from "../constants/constant";
import { ApiService } from "./api.service";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: "root",
})
export class RegisterService extends BaseService<any, number> {
    endpoint = REGISTRATION_PATH;

    constructor(protected override api: ApiService) {
        super(api, REGISTRATION_PATH);
    }

    checkUniqueEmail(email: string): Observable<any> {
        return this.api.post(this.endpoint + "/checkUniqueEmail", { email });
    }

    resendActivationEmail(email: string): Observable<any> {
        return this.api.post(this.endpoint + "/resendActivationEmail", { email });
    }
}
