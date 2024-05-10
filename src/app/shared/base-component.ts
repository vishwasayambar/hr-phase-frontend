import { Injector } from "@angular/core";
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

export abstract class BaseComponent {
	isMobileDevice = window.innerWidth < 760;
	router: Router;
	activatedRouter: ActivatedRoute;
	fb: UntypedFormBuilder;
	constructor(injector: Injector) {
		this.router = injector.get(Router);
		this.activatedRouter = injector.get(ActivatedRoute);
		this.fb = injector.get(UntypedFormBuilder);
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
}
