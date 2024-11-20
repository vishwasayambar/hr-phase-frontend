import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/employee";

@Component({
	selector: 'app-manager-dropdown',
	templateUrl: './manager-dropdown.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ManagerDropdownComponent),
			multi: true
		}
	]
})
export class ManagerDropdownComponent implements OnInit {
	@Input() managerOptions: Employee[];
	@Input("value") _value: any = null;
	selectedManager: any;
	searchQuery: string = ''
	
	constructor(protected service: EmployeeService) {
	}
	
	ngOnInit() {
		this.fetchEmployees();
	}
	
	get value() {
		return this._value;
	}
	
	set value(val) {
		this._value = val;
		this.onChange(val);
		this.onTouched();
	}
	
	private fetchEmployees() {
		this.service.getListByQuery({search: this.searchQuery}).subscribe({
			next: (res) => {
				this.managerOptions = res.data;
			},
			error: err => {
				console.log(err?.error?.meaning);
			},
		}).add(() => {
			// TODO:: Need to stop Loader when we add Loader
		});
	}
	
	onChange = (manager: any) => {
	};
	
	onTouched = () => {
	};
	
	writeValue(manager: any): void {
		this.selectedManager = manager;
	}
	
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	
	onValueChange(event: { value: any; }): void {
	
	}
	
	handleSelection(event: any) {
		this.searchQuery = event;
		this.fetchEmployees();
		this.value = event.id;
		this.selectedManager = event;
		this.onChange(event.id);
		this.onTouched();
	}
	
	filterChange(event: any) {
		this.searchQuery = event;
		this.fetchEmployees();
	}
}
