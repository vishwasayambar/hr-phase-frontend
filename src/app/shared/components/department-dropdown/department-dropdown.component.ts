import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {Department} from "../../models/Department";
import {DepartmentService} from "../../services/department.service";
import { ENTITIES, USER_STATUS_LIST } from "../../constants/constant";

@Component({
	selector: 'app-department-dropdown',
	templateUrl: './department-dropdown.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DepartmentDropdownComponent),
			multi: true
		}
	]
})
export class DepartmentDropdownComponent implements OnInit {
	@Input("value") _value: any = null;
	selectedDepartment: number;
	departmentList: Department[];
	
	constructor(protected service: DepartmentService) {
	}
	
	ngOnInit() {
		this.fetchDepartments();
	}
	
	get value() {
		return this._value;
	}
	
	set value(val) {
		this._value = val;
		this.onChange(val);
		this.onTouched();
	}
	
	onChange = (manager: any) => {
	};
	
	onTouched = () => {
	};
	
	writeValue(value: any): void {
		this.selectedDepartment = value;
	}
	
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	
	onDepartmentChange(event: any) {
		this.value = event.id;
		this.selectedDepartment = event;
		this.onChange(event.id);
		this.onTouched();
	}
	
	private fetchDepartments() {
		this.service.getListByQuery({}).subscribe({
			next: res => {
				this.departmentList = res.data;
			},
			error: err => {
				console.log("Error Fetching Departments", err);
			},
		})
	}
	
	protected readonly USER_STATUS_LIST = USER_STATUS_LIST;
	protected readonly ENTITIES = ENTITIES;
}
