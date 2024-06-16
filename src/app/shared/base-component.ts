import { Injector } from "@angular/core";
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ActiveToast, ToastrService } from "ngx-toastr";
import { TABLE_COLUMN_TEMPLATE } from "./constants/constant";
import { AuthenticationService } from "./services/authentication.service";
import { LoaderService } from "./services/loader.service";

export abstract class BaseComponent {
	isMobileDevice = window.innerWidth < 760;
	router: Router;
	isLoading = false;
	isLoggedIn = false;
	isSidebarCollapsed = false;
	activatedRouter: ActivatedRoute;
	fb: UntypedFormBuilder;
	authService: AuthenticationService;
	loadingService: LoaderService
	notifyService: ToastrService;
	tableColumnTemplate = TABLE_COLUMN_TEMPLATE;

	NOTIFICATION_TYPES = {
		INFO: "info",
		ERROR: "error",
		WARNING: "warning",
		SUCCESS: "success",
	};
	constructor(injector: Injector) {
		this.router = injector.get(Router);
		this.authService = injector.get(AuthenticationService);
		this.notifyService = injector.get(ToastrService);
		this.activatedRouter = injector.get(ActivatedRoute);
		this.loadingService = injector.get(LoaderService);
		this.fb = injector.get(UntypedFormBuilder);
		this.authService.authStatus.subscribe((isLoggedIn) => {
			this.isLoggedIn = isLoggedIn;
		})
	}

	validateFormFields(form: UntypedFormGroup | UntypedFormArray): void {
		Object.keys(form.controls).forEach(field => {
			const control = form.get(field);
			if (control instanceof UntypedFormControl) {
				control.markAsTouched();
				control.updateValueAndValidity(); // Reruns the custom validators if any
			} else if (control instanceof UntypedFormGroup) {
				this.validateFormFields(control);
			} else if (control instanceof UntypedFormArray) {
				Object.keys(control.controls).forEach(index => {
					if (control instanceof UntypedFormControl) {
						control.markAsTouched();
						control.updateValueAndValidity();
					} else {
						this.validateFormFields(control.get(index) as UntypedFormGroup);
					}
				});
			}
		});
	}

	notify(message: string, type = this.NOTIFICATION_TYPES.SUCCESS, title = "", override = {}): ActiveToast<any> {
		switch (type) {
			default:
				return this.notifyService.success(message, title ?? "Success", override);
			case this.NOTIFICATION_TYPES.ERROR:
				return this.notifyService.error(message, title ??  "Error", override);
			case this.NOTIFICATION_TYPES.INFO:
				return this.notifyService.info(message, title ?? "Info", override);
			case this.NOTIFICATION_TYPES.WARNING:
				return this.notifyService.warning(message, title ?? "Warning", override);
		}
	}

	toggleSidebar(){
		console.log("testing", this.isSidebarCollapsed);
		this.isSidebarCollapsed = !this.isSidebarCollapsed;
	}

	logout(): void {
		this.authService
			.logout()
			.subscribe()
			.add(() => {
				this.authService.clearUserSession();
				setTimeout(() => {
					this.router.navigate(["/"]);
				}, 10);
			});
	}


	// setLoader(value:boolean) {
	// 	this.isLoading = value;
	// }

}
