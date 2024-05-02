import { Injector } from "@angular/core";
import { UntypedFormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

export abstract class BaseComponent {
	router: Router;
	activatedRouter: ActivatedRoute;
	fb: UntypedFormBuilder;
	constructor(injector: Injector) {
		this.router = injector.get(Router);
		this.activatedRouter = injector.get(ActivatedRoute);
		this.fb = injector.get(UntypedFormBuilder);
	}
}
