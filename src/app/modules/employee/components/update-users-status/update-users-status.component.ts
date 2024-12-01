import { Component, Injector, input, OnInit, output } from '@angular/core';
import { Modal } from "flowbite";
import { USER_STATUS_LIST } from "../../../../shared/constants/constant";
import { EmployeeService } from "../../../../shared/services/employee.service";
import { BaseComponent } from "../../../../shared/base-component";
import { Employee } from "../../../../shared/models/employee";

@Component({
	selector: 'app-update-users-status',
	templateUrl: './update-users-status.component.html',
})
export class UpdateUsersStatusComponent extends BaseComponent implements OnInit {
	protected readonly USER_STATUS_LIST = USER_STATUS_LIST;
	
	user = input<Employee>();
	closeStatusChangePopup = output();
	modal: any;
	userId: number;
	isSaving = false;
	status: boolean;
	currentStatus: string;
	
	constructor(injector: Injector, protected service: EmployeeService) {
		super(injector);
	}
	
	ngOnInit() {
		const $modalElement: HTMLElement = document.querySelector('#change-user-status-modal');
		this.modal = new Modal($modalElement);
		this.modal.show();
		this.setDefaultStatus();
	}
	
	onStatusChange(event: string) {
		this.status = event === USER_STATUS_LIST[0];
	}
	
	onStatusSave() {
		this.isSaving = true;
		this.service.updateStatus({user_id: this.userId, status: this.status,}).subscribe({
			next: res => {
				this.notify('User Status Updated Successfully!');
				this.modal.hide();
				this.closeStatusChangePopup.emit();
			},
			error: err => {
				this.showErrorInNotifier(err);
			},
		}).add(() => {
			this.isSaving = false;
		});
	}
	
	closePopup() {
		this.modal.hide();
		this.closeStatusChangePopup.emit();
	}
	
	private setDefaultStatus() {
		this.userId = this.user()?.id;
		this.currentStatus = this.user().is_active === true ? USER_STATUS_LIST[0] : USER_STATUS_LIST[1];
	}
}