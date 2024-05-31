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
	isSuccess = false;
	isSigning = false;


	constructor(injector: Injector, protected service: RegisterService) {
		super(injector);
	}

	ngOnInit(): void {
		this.form = SignUp.getForm(new SignUp(this.signup));
	}

	onSignup() {
		if (this.form.valid) {
			this.isSigning = true;
			this.service.create(this.form.value).subscribe({

				next: () => {
					this.notify("SignUp successfully!");
					this.isSuccess = true;
				},
				error: err => {
					this.notify(`SignUp Failed! ${err?.error?.text}`, this.NOTIFICATION_TYPES.ERROR);
				}
			}).add(() => {
				this.isSigning = false;
			});
		} else {
			this.validateFormFields(this.form);
		}
	}

	resendActivationEmail(){
		this.isSigning = true;
		this.service.resendActivationEmail(this.form.getRawValue()['email']).subscribe({
			next: () => this.notify("Activation email has been resent successfully!"),
			error:  () => this.notify("Failed to resend activation email", this.NOTIFICATION_TYPES.ERROR),
		}).add(() => {
			this.isSigning = false;
		})
	}

}
