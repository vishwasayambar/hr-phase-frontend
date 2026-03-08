import { Component, Injector } from "@angular/core";
import { BaseComponent } from "../../base-component";
import { ToggleThemeComponent } from "../toggle-theme/toggle-theme.component";
import {RouterLink} from "@angular/router";

@Component({
    selector: "app-navbar",
    imports: [
        ToggleThemeComponent,
        RouterLink
    ],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss"
})
export class NavbarComponent extends BaseComponent {
	currentUser: any;

	constructor(injector: Injector) {
		super(injector);
		this.authService.currentUser.subscribe(user => {
			this.currentUser = user;
		});
	}
}
