import { AfterViewInit, Component, Injector, OnInit } from "@angular/core";
import {BaseComponent} from "../../../../shared/base-component";
import {COMPONENT_SIZES} from "../../../../shared/constants/constant";
import {EmployeeService} from "../../../../shared/services/employee.service";
import {Employee} from "../../../../shared/models/employee";
import {EmployeeColumn} from "../../../../shared/interfaces/employee-column";

@Component({
	selector: "app-employee-list",
	templateUrl: "./employee-list.component.html",
})
export class EmployeeListComponent extends BaseComponent implements OnInit  {
	protected readonly COMPONENT_SIZES = COMPONENT_SIZES;
	currentPage = 1;
	actionButtonArray : { name: string; icon: string }[];
	
	columns: EmployeeColumn[] = [
		{
			fieldName: "name",
			label: "Name",
			template: "userTemplate",
			visible: true,
		},
		{
			fieldName: "display_name",
			label: "Display Name",
			visible: true,
		},
		{
			fieldName: "email",
			label: "Email",
			visible: true,
		},
		{
			fieldName: "mobile_number",
			label: "Mobile Number",
			visible: true,
		},
		{
			fieldName: "is_active",
			label: "Status",
			template: "statusTemplate",
			visible: true,
		},
		{
			fieldName: "roles",
			label: "Role",
			template: "roleTemplate",
			visible: true,
		},
		{
			label: "Action",
			template: "actionTemplate",
			visible: true,
		},
	];
	dataList: Employee[];
	
	constructor(injector: Injector, protected service: EmployeeService) {
		super(injector);
	}
	
	ngOnInit() {
		this.fetchUsers();
		this.initializeActionButtons();
	}
	
	changePage(page: any){
		this.currentPage = page
		this.fetchUsers();
	}
	
	private fetchUsers() {
		this.service.getListByQuery({
			page: this.currentPage,
			paginate: "True",
			order_by: 'date_of_birth',
			order_by_direction: 'desc',
			per_page: 20,
		}).subscribe({
			next: res => {
				// @ts-ignore
				this.dataList = res.data;
			},
			error: (err) => {
				console.log("User List fetching error", err);
			},
		}).add(() => {
		
		});
	}
	
	private initializeActionButtons() {
		this.actionButtonArray = [
			{
				name: 'view Employee',
				icon: 'bi bi-eye-fill',
			}, {
				name: 'Change Status',
				icon: 'bi bi-vignette',
			},
		];
	}
	
	actionClick(event: string){
	if(event === 'view Employee'){
		this.router.navigate(['/employees/add'])
	}
	}
}
