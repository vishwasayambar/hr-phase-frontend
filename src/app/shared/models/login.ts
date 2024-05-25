import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";

export class Login {

    email: string;
    password:string;

    constructor(paramsObject: object) {
        return Object.assign(this, paramsObject);
    }

    static getForm(login: Login): UntypedFormGroup {
        return new UntypedFormBuilder().group({
    
            email: [login.email || null, [Validators.required]],
            password: [login.password || null, [Validators.required]],
            
        });
    }
}
