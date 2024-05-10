import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";

export class SignUp {
    name: string;
    company_name: string;
    email: string;
    source: string;
    plan: string;
    mobile_number: string;
    agree_term_and_conditions: boolean;

    constructor(paramsObject: object) {
        return Object.assign(this, paramsObject);
    }

    static getForm(signUp: SignUp): UntypedFormGroup {
        return new UntypedFormBuilder().group({
            name: [signUp.name || null, [Validators.required]],
            company_name: [signUp.company_name || null, [Validators.required]],
            email: [signUp.email || null, [Validators.required]],
            plan: [signUp.plan || null, [Validators.required]],
            source: [signUp.source || null],
            mobile_number: [signUp.mobile_number || null, [Validators.required, CustomValidators.phoneNumberValidator]],
            agree_term_and_conditions: [signUp.agree_term_and_conditions || false, [Validators.requiredTrue]],
            google_recaptcha: [""],
        });
    }
}
