import { Component, Injector, OnInit, output } from '@angular/core';
import { BaseComponent } from "../../../../shared/base-component";
import { UntypedFormGroup } from "@angular/forms";
import { Role } from "../../../../shared/models/role";
import { RoleService } from "../../../../shared/services/role.service";

@Component({
	selector: 'app-create-role-popup',
	templateUrl: './create-role-popup.component.html',
})
export class CreateRolePopupComponent extends BaseComponent implements OnInit {
	closePopup = output();
	savePopup = output<Role>();
	form: UntypedFormGroup;
	role: Role;
	isSaving = false;
	
	constructor(injector: Injector, protected service: RoleService) {
		super(injector);
	}
	
	ngOnInit() {
		this.form = Role.getForm(new Role({}));
	}
	
	create() {
		if (this.form.valid) {
			this.isSaving = true
			this.service.create(this.form.value).subscribe({
				next: res => {
					this.role = new Role(res);
					this.savePopup.emit(this.role);
					this.notify("Role Created Successfully!");
				},
				error: err => {
					console.log(err);
				},
			}).add(() => {
				this.isSaving = false;
				this.closeModal('create-role-modal');
			})
		} else {
			this.validateFormFields(this.form);
		}
	}
	
	closeRolePopup() {
		this.closePopup.emit()
	}
}
