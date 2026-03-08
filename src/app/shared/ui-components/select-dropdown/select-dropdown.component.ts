import { Component, input, Input, OnInit, output } from '@angular/core';
import { ENTITIES } from "../../constants/constant";

@Component({
	selector: 'app-select-dropdown',
	templateUrl: './select-dropdown.component.html',
})
export class SelectDropdownComponent implements OnInit {
	protected readonly ENTITIES = ENTITIES;
	@Input() options: any[] = [];
	isEditMode = input(true);
	placeholder = input('Search...');
	templateType = input('');
	defaultSelection = input();
	selectionChange = output<any>();
	value: any;
	showDropdown = false;
	
	ngOnInit() {
		if (this.templateType() === ENTITIES.ROLE) {
			this.value = this.options[0].display_name;
		}else if (this.templateType() === ENTITIES.NAME) {
			this.value = this.options[0].name;
		} else {
			this.value = this.defaultSelection();
		}
	}
	
	onValueChange(option: any) {
		if (this.templateType() === ENTITIES.ROLE) {
			this.value = option.display_name
		}else if (this.templateType() === ENTITIES.NAME) {
			this.value = option.name
		} else {
			this.value = option
		}
		this.selectionChange.emit(option);
	}
	
	hideDropdown() {
		setTimeout(() => this.showDropdown = false, 100); // Delay to allow item selection
	}
	
	openDropdown(){
		this.showDropdown = this.isEditMode();
	}
}
