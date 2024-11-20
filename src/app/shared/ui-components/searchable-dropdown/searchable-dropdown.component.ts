import {Component, input, Input, OnInit, output} from '@angular/core';
import {COMPONENT_SIZES} from "../../constants/constant";

@Component({
	selector: 'app-searchable-dropdown',
	templateUrl: './searchable-dropdown.component.html',
})
export class SearchableDropdownComponent implements OnInit {
	protected readonly COMPONENT_SIZES = COMPONENT_SIZES;
	@Input() options: any[] = [];
	@Input() displayField: string = 'name';
	@Input() placeholder: string = 'Search...';
	templateType = input();
	selectionChange = output<any>();
	filterChange = output<any>();
	searchQuery: string = '';
	filteredOptions: any[] = [];
	showDropdown = false;
	
	ngOnInit() {
		this.filteredOptions = this.options;
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
}
