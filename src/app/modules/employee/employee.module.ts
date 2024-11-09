import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeAddComponent} from './components/employee-add/employee-add.component';


@NgModule({
	declarations: [
		EmployeeComponent,
		EmployeeListComponent,
		EmployeeAddComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		EmployeeRoutingModule,
	]
})
export class EmployeeModule {
}
