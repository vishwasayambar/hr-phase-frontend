import { AfterViewInit, Component, Injector, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "../../../../shared/base-component";
import { TABLE_COLUMN_TEMPLATE } from "../../../../shared/constants/constant";
import { UserPopoverComponent } from "../../../../shared/popovers/user-popover/user-popover.component";

@Component({
	selector: "app-employee-list",
	templateUrl: "./employee-list.component.html",
	styleUrl: "./employee-list.component.scss"
})
export class EmployeeListComponent extends BaseComponent implements OnInit{
	columns: any = [];
	dataList: any = [
		{
			name: "Vishwa",
			email: "vishwa@gmail.com",
			position: "Full Stack Developer",
			status: "Active",
			actionButtonText: "Edit User"
		},
		{
			name: "Bonnie Green",
			email: "bonnieflowbite.com",
			position: "Designer",
			status: "Active",
			actionButtonText: "Edit User"
		},
		{
			name: "Jese Leos",
			email: "jeseflowbite.com",
			position: "Vue JS Developer",
			status: "Active",
			actionButtonText: "Edit User"
		},
		{
			name: "Thomas Lean",
			email: "thomesflowbite@gmail.com",
			position: "UI/UX Engineer",
			status: "Active",
			actionButtonText: "Edit User"
		},
		{
			name: "Thomas JAA",
			email: "thomesflowbite@gmail.com",
			position: "UI/UX Engineer",
			status: "Active",
			actionButtonText: "Edit User"
		},
		{
			name: "Thomas Rahul",
			email: "thomesflowbite@gmail.com",
			position: "UI/UX Engineer",
			status: "Active",
			actionButtonText: "Edit User"
		},
		{
			name: "Thomas Soha",
			email: "thomesflowbite@gmail.com",
			position: "UI/UX Engineer",
			status: "Active",
			actionButtonText: "Edit User"
		}
	];

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit() {
		this.columns = [
			{
				template: "name"
			},
			{
				template: "email"
			},
			{
				template: "position"
			},
			{
				template: "status"
			},
			{
				template: "action"
			},
		];
	}

}
