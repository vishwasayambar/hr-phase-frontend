import { Component, Injector, OnInit, signal } from '@angular/core';
import { Employee } from "../../../../shared/models/employee";
import { EmployeeService } from "../../../../shared/services/employee.service";
import { BaseComponent } from "../../../../shared/base-component";
import { filter } from "rxjs";
import { NavigationEnd } from "@angular/router";

@Component({
	selector: 'app-employee-profile',
	templateUrl: './employee-profile.component.html',
})
export class EmployeeProfileComponent extends BaseComponent implements OnInit{
	userId = signal(+this.activatedRouter.snapshot.paramMap.get("employee_id"));
	currentTabId = signal(+this.activatedRouter.firstChild.snapshot?.data['tab_id']);
	user: Employee;
	employeeProfileTabs: any = [
		{
			id: 0,
			name: 'Profile',
			link: 'profiles',
		},
		{
			id: 1,
			name: 'Permission',
			link: 'permissions',
		}
	]
	
	constructor(injector: Injector, protected service: EmployeeService) {
		super(injector);
	}
	
	ngOnInit(): void {
      this.fetchEmployee();
		this.trackTabChanges();
	}
	
	private trackTabChanges() {
		// Listen to navigation changes to update the active tab.
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			const currentPath = this.activatedRouter.firstChild?.snapshot.url[0]?.path || '';
			const activeTab = this.employeeProfileTabs.find((tab: { link: string; }) => tab.link === currentPath);
			if (activeTab) {
				debugger;
				this.currentTabId.set(activeTab.id);
			}
		});
	}
	
	private fetchEmployee() {
		this.service.getById(this.userId()).subscribe({
			next: res => {
				this.user = res;
			},
			error: err => {
				this.showErrorInNotifier(err);
			},
		})
	}
}
