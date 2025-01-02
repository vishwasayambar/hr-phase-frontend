import { Component } from '@angular/core';
import { DepartmentService } from "../../../../shared/services/department.service";
import { Department } from "../../../../shared/models/Department";
import { DepartmentColumns } from "../../../../shared/interfaces/columns";
import { ENTITIES } from "../../../../shared/constants/constant";

@Component({
	selector: 'app-department-list',
	templateUrl: './department-list.component.html',
})
export class DepartmentListComponent {
	protected readonly ENTITIES = ENTITIES;
	departments: Department[];
	columns: DepartmentColumns[] = [
		{
			fieldName: "name",
			label: "Name",
			template: "nameTemplate",
			visible: true,
		},
		{
			fieldName: "created_at",
			label: "Created At",
			template: "dateTemplate",
			visible: true,
		},
		{
			fieldName: "updated_at",
			label: "Updated At",
			template: "dateTemplate",
			visible: true,
		},
		{
			fieldName: "deleted_at",
			label: "Deleted At",
			template: "dateTemplate",
			visible: true,
		},
		{
			label: "Action",
			template: "actionTemplate",
			visible: true,
		},
	];
	
	constructor(protected service: DepartmentService) {}
}
