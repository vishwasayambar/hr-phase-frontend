import { Component, HostListener, Injector, input, output, signal } from '@angular/core';
import { BaseComponent } from "../../base-component";

@Component({
	selector: 'app-custom-dropdown',
	templateUrl: './custom-dropdown.component.html',
})
export class CustomDropdownComponent extends BaseComponent {
	items = input<any[]>(['no-content','no-content']);
    showIcon = input(false);
	isOpen = signal(false);
    clickAction = output<string>();
	dropdownPosition = ''; // Default position (bottom-left)
	// Track if dropdown or button is clicked
	isClickInside = false;
	
	
	constructor(injector: Injector) {
		super(injector);
	}
	
	// Toggle dropdown open/close
	toggleDropdown(event: Event): void {
		this.setDropdownPosition('right-1/3 top-full');
		this.isOpen.set(!this.isOpen());
        this.isClickInside = true;
	}
	
	// Handle click inside dropdown area
	onDropdownClick(event: any): void {
      this.clickAction.emit(event.name)
      debugger;
	}
	
	// Close dropdown if click is outside
	@HostListener('document:click', ['$event'])
	handleOutsideClick(event: MouseEvent): void {
		if (!this.isClickInside) {
			this.isOpen.set(false);
		}
		this.isClickInside = false; // Reset for the next click
	}
	
	// Change position dynamically
	setDropdownPosition(position: string): void {
		this.dropdownPosition = position;
	}
}
