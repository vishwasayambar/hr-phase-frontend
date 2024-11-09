import {Component, input, output} from '@angular/core';

@Component({
	selector: 'app-confirmation-popup',
	standalone: true,
	imports: [],
	templateUrl: './confirmation-popup.component.html',
})
export class ConfirmationPopupComponent {
	modalId = input();
	message = input('Are you sure you want to delete this product?');
	confirmBtnName = input("Yes, I'm sure");
	cancelBtnName = input('No, cancel');
	onCancelClick = output();
	onSaveClick = output();
	
	onSave() {
		this.onSaveClick.emit();
	}
	
	onCancel() {
		this.onCancelClick.emit();
	}
}
