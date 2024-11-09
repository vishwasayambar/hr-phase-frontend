import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeAddComponent } from "./components/employee-add/employee-add.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmployeeComponent } from "./employee.component";

const routes: Routes = [
	{
		path: "",
		component: EmployeeComponent,
		title: "Employee Management",
		children: [
			{
				path: "list",
				component: EmployeeListComponent,
				title: "Employee Listing",
			},
			{
				path: "add",
				component: EmployeeAddComponent,
				title: "Add New Employee",
			},
			{
				path: "",
				redirectTo: "list",
				pathMatch: "full",
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
