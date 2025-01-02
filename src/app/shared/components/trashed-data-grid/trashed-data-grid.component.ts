import { Component, Injector, input, Input, OnInit, output, signal } from '@angular/core';
import { DepartmentService } from "../../services/department.service";
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";
import { Department } from "../../models/Department";
import { BaseComponent } from "../../base-component";

@Component({
	selector: 'app-trashed-data-grid',
	templateUrl: './trashed-data-grid.component.html',
})
export class TrashedDataGridComponent extends BaseComponent implements OnInit {
	@Input() service: DepartmentService | EmployeeService;
	@Input() columns: any[];
	onRestoreClick = output();
	onDeleteClick = output<Employee | Department>();
	onBackClick = output();
	showMultiSelection = input(false);
    isVisibleRestoreAction = input(false);
	isVisibleDeleteAction = input(false);
	entity = input.required<string>();
	currentPage = signal(1);
	dataList: any[];
	isVisibleDepartmentPopup = signal(false);
	selectedEntity: any;
	
	constructor(injector: Injector) {
		super(injector);
	}
	
	ngOnInit() {
		this.fetchData();
	}
	
	private fetchData() {
		this.service.getTrashedListByQuery(this.paramsOfGetListByQuery(this.currentPage(), 'id', 'desc')).subscribe({
			next: (res: { data: any; }) => {
				this.dataList = res.data;
			},
			error: (err: ErrorEvent) => {
				this.showErrorInNotifier(err);
			},
		})
	}
	
	restore(data: any) {
		this.selectedEntity = data;
		if (this.entity() === this.entities.DEPARTMENT) {
			this.service.restore(data.id).subscribe({
				next: res => {
					this.notify(this.entity() + ' has been Restored Successfully!');
					this.fetchData();
					this.onRestoreClick.emit(res);
				},
				error: err => {
					this.showErrorInNotifier(err);
				},
			});
		}
	}
	
	delete(data: any) {
		this.service.permanentDelete(data.id).subscribe({
			next: res => {
				this.notify(this.entity() + ' has been deleted Permanently!');
				this.fetchData();
				this.onDeleteClick.emit(res);
			},
			error: err => {
				this.showErrorInNotifier(err);
			},
		});
	}
	
	back(){
		this.onBackClick.emit();
	}
}
