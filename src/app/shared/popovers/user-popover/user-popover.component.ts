import {Component, input} from "@angular/core";
import {Employee} from "../../models/employee";
import {COMPONENT_SIZES} from "../../constants/constant";

@Component({
	selector: 'app-user-popover',
	templateUrl: './user-popover.component.html',
})
export class UserPopoverComponent {
	protected readonly COMPONENT_SIZES = COMPONENT_SIZES;
	id = input.required<string>();
	user = input.required<Employee>();
	
}
