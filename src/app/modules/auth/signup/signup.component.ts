import { Component, Injector } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { BaseComponent } from "../../../shared/base-component";
import { SignUp } from "../../../shared/models/sign-up";
import { RegisterService } from "../../../shared/services/register.service";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrl: "./signup.component.scss"
})
export class SignupComponent extends BaseComponent {
	form: UntypedFormGroup;
	signup: SignUp;


	constructor(injector: Injector, protected service: RegisterService) {
		super(injector);
	}

	ngOnInit(): void {
		this.form = SignUp.getForm(new SignUp(this.signup));
	}

	onSignup() {
			console.log("IS VALID OR NOT", this.form.valid);
			console.log(this.form.controls);
		if (this.form.valid) {
			this.service.create(this.form.value).subscribe(() => {
				console.log("SignUp successfully!");
			}, err => {
				console.log("SIGNUP failed", err.error);
			}).add(() => {
				// this.saving = false;
			});
		} else {
			this.validateFormFields(this.form);
		}
	}

}
