import { Component, Injector, OnInit } from "@angular/core";
import { UntypedFormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "../../../shared/base-component";
import { AuthenticationService } from "../../../shared/services/authentication.service";

@Component({
	selector: "app-account-activate",
	templateUrl: "./account-activate.component.html",
	styleUrl: "./account-activate.component.scss"
})
export class AccountActivateComponent extends BaseComponent implements OnInit {
	verificationCode: any = null;
    form: UntypedFormGroup;
	errorMessage: string;
	isSubmitted = false;

	constructor(injector: Injector, protected service: AuthenticationService) {
		super(injector);
	}

	ngOnInit() {
		this.activatedRouter.params.subscribe(params => {
			if (params["activation_code"]) {
				this.verificationCode = params["activation_code"];
				this.verifyAccountActivationCode();
			}
		});
	}

	verifyAccountActivationCode(): void {
		// this.showLoader(true);
		this.service
			.verifyActivationToken({token: this.verificationCode})
			.subscribe(
				response => {
					if (response) {
						// this.showPasswordReset = true;
						this.form = this.fb.group({
							token: this.verificationCode,
							password: [null, [Validators.required]],
							password_confirmation: [null, [Validators.required]],
						});
					}
				},
				() => {
					// this.notify("Invalid token redirecting to login", this.NOTIFICATION_TYPES.ERROR);
                    alert("Invalid token redirecting to login")
					this.router.navigate(["/auth/login"]);
				},
			)
			.add(() => {
				// this.showLoader(false);
			});
	}

  activateAccount(): void {
    this.isSubmitted = true;
    if (this.form.valid && this.form.value["password"] === this.form.value["password_confirmation"]) {
      // this.isActivating = true;
      this.service
          .activateAccount(this.form.value)
          .subscribe(
              response => {
                // this.showPasswordReset = false;
                // this.notify("Account activated successfully");
                console.log("Account activated successfully!");
                this.service.setUserSession(response.user, response.access_token, response.permissions, response.tenant);
                // this.role = response.user.roles[0];
              },
              errorResponse => {
                this.errorMessage = errorResponse.error.errors;
                // this.notify("Error in account activation", this.NOTIFICATION_TYPES.ERROR);
              },
          )
          .add(() => {
            // this.isActivating = false;
          });
    } else {
      this.validateFormFields(this.form);
    }
  }

}
