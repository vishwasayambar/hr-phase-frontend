import { Component, input, Input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { COMPONENT_SIZES } from "../../constants/constant";

@Component({
	selector: 'app-searchable-dropdown',
	templateUrl: './searchable-dropdown.component.html',
})
export class SearchableDropdownComponent implements OnInit, OnChanges {
	protected readonly COMPONENT_SIZES = COMPONENT_SIZES;
	@Input() options: any[] = [];
	@Input() displayField: string = 'name';
	@Input() placeholder: string = 'Search...';
	@Input() defaultSelection: string = '';
	isEditMode = input(true);
	templateType = input();
	selectionChange = output<any>();
	filterChange = output<any>();
	searchQuery: string = '';
	filteredOptions: any[] = [];
	showDropdown = false;
	
	ngOnInit() {
		this.filteredOptions = this.options;
		this.searchQuery = this.defaultSelection; //This is default selection
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes['defaultSelection']?.currentValue) {
			this.options = changes['options']?.currentValue;
			this.filteredOptions = this.options;
		}
		if (changes['defaultSelection']?.currentValue) {
			this.searchQuery = changes['defaultSelection']?.currentValue;
		}
	}
	
	filterOptions() {
		this.filteredOptions = this.options.filter(option =>
			option[this.displayField].toLowerCase().includes(this.searchQuery.toLowerCase())
		);
		this.filterChange.emit(this.searchQuery);
	}
	
	selectOption(option: any) {
		this.searchQuery = option.display_name ?? option.name;
		this.selectionChange.emit(option);
	}
	
	hideDropdown() {
		setTimeout(() => this.showDropdown = false, 200); // Delay to allow item selection
	}
	
	openDropDown(){
		this.showDropdown = this.isEditMode();
	}
}
