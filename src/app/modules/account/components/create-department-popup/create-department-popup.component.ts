import { Component, Injector, Input, OnInit, output } from '@angular/core';
import { UntypedFormGroup } from "@angular/forms";
import { BaseComponent } from "../../../../shared/base-component";
import { Department } from "../../../../shared/models/Department";
import { DepartmentService } from "../../../../shared/services/department.service";
import { Modal } from "flowbite";

@Component({
	selector: 'app-create-department-popup',
	templateUrl: './create-department-popup.component.html',
})
export class CreateDepartmentPopupComponent extends BaseComponent implements OnInit {
	@Input() department: Department;
	closePopup = output();
	savePopup = output<Department>();
	form: UntypedFormGroup;
	isSaving = false;
	modal: any;
	options = {
		closable: false, // Prevent closing with backdrop click
	};
	
	constructor(injector: Injector, protected service: DepartmentService) {
		super(injector);
	}
	
	ngOnInit() {
		const $modalElement: HTMLElement = document.querySelector('#create-department');
		this.modal = new Modal($modalElement, this.options);
		this.modal.show();
		this.form = Department.getForm(new Department(this.department ?? {}));
	}
	
	create() {
		if (this.form.valid) {
			this.isSaving = true
			const serviceResponse = this.department?.id ? this.service.update(this.form.value) : this.service.create(this.form.value)
			serviceResponse.subscribe({
				next: res => {
					this.department = new Department(res);
					this.savePopup.emit(this.department);
					this.modal.hide();
					this.notify("Department Created Successfully!");
				},
				error: err => {
					this.showErrorInNotifier(err);
					console.log(err);
				},
			}).add(() => {
				this.isSaving = false;
				this.closeModal('create-department-modal');
			})
		} else {
			this.validateFormFields(this.form);
		}
	}
	
	closeDepartmentPopup() {
		this.modal.hide();
		this.closePopup.emit()
	}
}
