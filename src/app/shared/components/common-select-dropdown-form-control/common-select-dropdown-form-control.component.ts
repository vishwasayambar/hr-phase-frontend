import { Component, forwardRef, input, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { COMMON_SELECT_DROPDOWN_FORM_CONTROL_TYPES } from "../../constants/constant";

@Component({
	selector: 'app-common-select-dropdown-form-control',
	templateUrl: './common-select-dropdown-form-control.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CommonSelectDropdownFormControlComponent),
			multi: true
		}
	]
})
export class CommonSelectDropdownFormControlComponent implements OnInit {
	@Input("value") _value: any = null;
	@Input() list: any = null;
	formControlType: any = input<string>();
	selectedValue: number;
	
	constructor() {
	}
	
	ngOnInit() {
		debugger;
		// this.fetchDepartments();
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
		this.selectedValue = value;
	}
	
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	
	onSelection(event: any) {
		this.value = event.id;
		this.selectedValue = event;
		this.onChange(event.id);
		this.onTouched();
	}
	
	// private fetchDepartments() {
	// 	this.service.getListByQuery({}).subscribe({
	// 		next: res => {
	// 			this.departmentList = res.data;
	// 		},
	// 		error: err => {
	// 			console.log("Error Fetching Departments", err);
	// 		},
	// 	})
	// }
	protected readonly COMMON_SELECT_DROPDOWN_FORM_CONTROL_TYPES = COMMON_SELECT_DROPDOWN_FORM_CONTROL_TYPES;
}
