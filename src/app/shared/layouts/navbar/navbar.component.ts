import { Component, Injector, OnInit } from "@angular/core";
import { BaseComponent } from "../../base-component";
import { ToggleThemeComponent } from "../toggle-theme/toggle-theme.component";
import {RouterLink} from "@angular/router";
import { SharedModule } from "../../shared.module";
import { COMPONENT_SIZES } from "../../constants/constant";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [
		ToggleThemeComponent,
		RouterLink,
		SharedModule
	],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss"
})
export class NavbarComponent extends BaseComponent implements OnInit {
	authUser = this.currentUser;
	constructor(injector: Injector) {
		super(injector);
	}
	
	ngOnInit(): void {
	
	}
	
	protected readonly COMPONENT_SIZES = COMPONENT_SIZES;
}
