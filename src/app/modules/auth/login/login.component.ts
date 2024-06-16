import { AuthenticationService } from "../../../shared/services/authentication.service";
import { Injector } from "@angular/core";
import { Login } from "../../../shared/models/login";
import { Component } from "@angular/core";
import { BaseComponent } from "../../../shared/base-component";
import { UntypedFormGroup } from "@angular/forms";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent extends BaseComponent {
	form: UntypedFormGroup;
	login: Login;
	isLogging = false;

	constructor(injector: Injector, private service: AuthenticationService) {
		super(injector);
	}

	ngOnInit(): void {
		this.form = Login.getForm(new Login(this.login));
	}

	onLogin() {
		this.loadingService.setLoading(true);
		if (this.form.valid) {
			this.isLogging = true;
			this.service.login(this.form.value).subscribe({
				next: response => {
					this.service.setUserSession(response.user, response.access_token, response.permissions, response.tenant);
					this.notify("Login successfully!");
				},
				error: errorResponse => {
					console.log("Error Logging in", errorResponse?.error?.text);
					this.notify(`Login Failed! ${errorResponse?.error?.text}`, this.NOTIFICATION_TYPES.ERROR);
				}
			}).add(() => {
				this.isLogging = false;
				this.loadingService.setLoading(false);
			});
		} else {
			this.validateFormFields(this.form);
		}
	};
}
