import { Component, Injector, Input, input, OnInit, output, signal } from '@angular/core';
import { Department } from "../../models/Department";
import { BaseComponent } from "../../base-component";
import { DepartmentService } from "../../services/department.service";
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";

@Component({
	selector: 'app-data-grid',
	templateUrl: './data-grid.component.html',
	styleUrl: './data-grid.component.scss'
})
export class DataGridComponent extends BaseComponent implements OnInit {
	@Input() dataList: any[];
	@Input() service: DepartmentService | EmployeeService;
	@Input() columns: any[];
	showMultiSelection = input(false);
	isVisibleEditAction = input(false);
	isVisibleDeleteAction = input(false);
	isVisibleCreateAction = input(false);
	entity = input.required<string>();
	onEditClick = output();
	onDeleteClick = output<Employee | Department>();
	onCancelClick = output();
	currentPage = signal(1);
	
	constructor(injector: Injector) {
		super(injector);
	}
	
	ngOnInit() {
		this.service.getListByQuery(this.paramsOfGetListByQuery(this.currentPage(), 'id', 'desc')).subscribe({
			next: (res: { data: any; }) => {
				this.dataList = res.data;
			},
			error: (err: ErrorEvent) => {
				this.showErrorInNotifier(err);
			},
		})
	}
	
	edit(data: any) {
	
	}
	
	delete(data: any) {
		this.service.delete(data.id).subscribe({
			next: res => {
				this.notify(this.entity() + ' has been deleted Successfully!');
                this.onDeleteClick.emit(res);
			},
			error: err => {
				this.showErrorInNotifier(err);
			},
		});
	}
	
}