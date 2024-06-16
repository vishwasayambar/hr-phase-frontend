import { Component, Injector } from "@angular/core";
import { BaseComponent } from "../../base-component";
import { ToggleThemeComponent } from "../toggle-theme/toggle-theme.component";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [
		ToggleThemeComponent
	],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss"
})
export class NavbarComponent extends BaseComponent {

	constructor(injector: Injector) {
		super(injector);
	}
}
