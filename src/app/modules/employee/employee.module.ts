import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { UpdateUsersStatusComponent } from './components/update-users-status/update-users-status.component';
import {
	UserRoleAndPermissionComponent
} from './components/user-role-and-permission/user-role-and-permission.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';


@NgModule({
	declarations: [
		EmployeeComponent,
		EmployeeListComponent,
		EmployeeAddComponent,
		UpdateUsersStatusComponent,
		UserRoleAndPermissionComponent,
		EmployeeProfileComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		EmployeeRoutingModule,
	]
})
export class EmployeeModule {
}
