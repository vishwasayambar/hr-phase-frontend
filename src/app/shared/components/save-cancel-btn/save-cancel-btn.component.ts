import { Component, input, Input, output } from '@angular/core';

@Component({
	selector: 'app-save-cancel-btn',
	templateUrl: './save-cancel-btn.component.html',
})
export class SaveCancelBtnComponent {
	@Input() isCreating = false;
	@Input() isEditMode = true;
	savingText = input('Creating...');
	saveText = input('Creat');
	cancelingText = input('Canceling...');
	cancelText = input('Cancel');
	saveIconClass = input('bi bi-check2-circle');
	cancelIconClass = input('bi bi-x-circle');
	cancelClick = output();
	saveClick = output();
	editClick = output();
	
	cancel() {
		this.cancelClick.emit();
	}
	
	save() {
		this.saveClick.emit();
	}
	
	editForm() {
		this.editClick.emit();
	}
	
}
