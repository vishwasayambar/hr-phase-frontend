import {Component, input, Input, OnInit, output} from '@angular/core';

@Component({
	selector: 'app-select-dropdown',
	templateUrl: './select-dropdown.component.html',
})
export class SelectDropdownComponent implements OnInit {
	@Input() options: any[] = [];
	placeholder = input('Search...');
	selectionChange = output<any>();
	value: any;
	showDropdown = false;
	
	// TODO:: Need to Update this to made it generic by using template like some option dont have display_name and id some are direct name it should like searchable dropdown only diff is its not writable
	ngOnInit() {
		this.value = this.options[0].display_name;
	}
	
	onValueChange(option: any) {
		this.value = option.display_name
		this.selectionChange.emit(option);
	}
	
	hideDropdown() {
		setTimeout(() => this.showDropdown = false, 200); // Delay to allow item selection
	}
}
