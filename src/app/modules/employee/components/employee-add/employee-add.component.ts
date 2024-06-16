import { Component, Injector, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { BaseComponent } from "../../../../shared/base-component";
import { EMPLOYEE_PROFILE_TABS, GENDER_LIST } from "../../../../shared/constants/constant";
import { Employee } from "../../../../shared/models/employee";
import { EmployeeService } from "../../../../shared/services/employee.service";

@Component({
	selector: "app-employee-add",
	templateUrl: "./employee-add.component.html",
	styleUrl: "./employee-add.component.scss"
})
export class EmployeeAddComponent extends BaseComponent implements OnInit {
	form: UntypedFormGroup;
	genderList = Object.values(GENDER_LIST);
	profileTabs = Object.values(EMPLOYEE_PROFILE_TABS);
	isCreating = false;
	employee: Employee;
	employeeId: number;

	constructor(injector: Injector, protected service: EmployeeService) {
		super(injector);
	}

	ngOnInit() {
		this.employeeId = +this.activatedRouter.snapshot.parent.paramMap.get("employee_id");
		if (this.employeeId) {
			this.isCreating = true;
			this.service.getById(this.employeeId).subscribe({
				next: response => {
					this.employee = new Employee(response);
					this.form = Employee.getForm(this.employee);
				},
				error: (err: any) => {
					this.notify(err.message, this.NOTIFICATION_TYPES.ERROR);
				}

			}).add(() => this.isCreating = true);
		} else {
			this.form = Employee.getForm(new Employee({}));
		}
	}

	create() {
		console.log(this.form.value);
		debugger;
		if (this.form.valid) {
			this.isCreating = true;
			this.service.create(this.form.value).subscribe({
				next: (response) => {
					this.employee = new Employee(response);
					this.notify("Employee created successfully!");
				},
				error: (err) => {
					this.notify(err, this.NOTIFICATION_TYPES.ERROR);
				},
			}).add(() => {
				this.isCreating = false;
			});
		} else {
			this.validateFormFields(this.form);
		}
	}

}
