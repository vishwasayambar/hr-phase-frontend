import {Component, Injector, OnInit, ViewChild} from "@angular/core";
import {UntypedFormGroup} from "@angular/forms";
import {BaseComponent} from "../../../../shared/base-component";
import {
	ATTENDANCE_SCHEME_LIST,
	EMPLOYEE_PROFILE_TABS,
	GENDER_LIST,
	GRADE_LIST
} from "../../../../shared/constants/constant";
import {Employee} from "../../../../shared/models/employee";
import {EmployeeService} from "../../../../shared/services/employee.service";
import {TabsComponent} from "../../../../shared/ui-components/tabs/tabs.component";
import {TabItem} from "flowbite";

@Component({
	selector: "app-employee-add",
	templateUrl: "./employee-add.component.html",
})
export class EmployeeAddComponent extends BaseComponent implements OnInit {
	@ViewChild(TabsComponent) tabsComponent: TabsComponent;
	form: UntypedFormGroup;
	genderList = Object.values(GENDER_LIST);
	profileTabs = Object.values(EMPLOYEE_PROFILE_TABS);
	attendanceSchemeList = Object.values(ATTENDANCE_SCHEME_LIST);
	gradeList = Object.values(GRADE_LIST);
	isCreating = false;
	isLastTab = false;
	isEditMode = false;
	employee: Employee;
	employeeId: number;
	allTabs: TabItem[];
	
	constructor(injector: Injector, protected service: EmployeeService) {
		super(injector);
	}
	
	ngOnInit() {
		this.getManagerList();
		this.employeeId = +this.activatedRouter.snapshot.parent.paramMap.get("employee_id");
		if (this.employeeId) {
			this.isCreating = true;
			this.service.getById(this.employeeId).subscribe({
				next: response => {
					this.employee = new Employee(response);
					this.form = Employee.getForm(this.employee);
					this.form.disable();
					this.isEditMode = false;
				},
				error: (err: any) => {
					this.notify(err.message, this.NOTIFICATION_TYPES.ERROR);
				}
			}).add(() => this.isCreating = false);
		} else {
			this.form = Employee.getForm(new Employee({}));
		}
	}
	
	create() {
		if (this.form.valid) {
			this.isCreating = true;
			this.employee?.id ? this.updateEmployee() : this.createEmployee();
		} else {
			this.validateFormFields(this.form);
		}
	}
	
	// Method to call showTab
	nextTab(tabId: string) {
		this.tabsComponent.showTab(tabId);
		this.allTabs = this.tabsComponent.tabs._items;
		if (this.tabsComponent.tabs._activeTab.id === this.allTabs[this.allTabs?.length - 1]?.id) {
			this.isLastTab = true;
		}
	}
	
	previousTab() {
		this.tabsComponent.showPreviousTab();
	}
	
	setCurrentTab(event: string) {
		this.tabsComponent?.tabs?._items ? this.isLastTab = this.tabsComponent?.tabs?._activeTab.id === this.tabsComponent?.tabs?._items[this.tabsComponent?.tabs?._items?.length - 1]?.id : event;
	}
	
	private getManagerList() {
		this.service.getEmployeeList()
	}
	
	private createEmployee() {
		this.service.create(this.form.value).subscribe({
			next: (response) => {
				this.employee = new Employee(response);
				this.notify("Employee created successfully!");
			},
			error: (err) => {
				this.showErrorInNotifier(err);
			},
		}).add(() => {
			this.isCreating = false;
		});
	}
	
	private updateEmployee() {
		this.service.update(this.form.value).subscribe({
			next: (response) => {
				this.employee = new Employee(response);
				this.notify("Employee Updated successfully!");
			},
			error: (err) => {
				this.showErrorInNotifier(err);
			},
		}).add(() => {
			this.isCreating = false;
		});
	}
	
	editForm(){
		this.isEditMode = true;
		this.form.enable();
	}
	
	editCancel(){
		this.isEditMode = false;
		this.form.disable();
	}
}
