import { Component, Injector } from "@angular/core";
import { BaseComponent } from "../../base-component";

@Component({
	selector: "app-dropdown-action",
	standalone: true,
	imports: [],
	templateUrl: "./dropdown-action.component.html",
	styleUrl: "./dropdown-action.component.scss"
})
export class DropdownActionComponent extends BaseComponent {

	constructor(injector: Injector) {
		super(injector);
	}
}
