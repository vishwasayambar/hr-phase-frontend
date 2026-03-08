import { Component, input } from '@angular/core';
import { Employee } from "../../models/employee";
import { COMPONENT_SIZES } from "../../constants/constant";

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent  {
	userId = input();
	user = input<Employee>();
	
	protected readonly COMPONENT_SIZES = COMPONENT_SIZES;
}
