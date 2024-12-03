import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../shared/base-component";
import { RoleService } from "../../../../shared/services/role.service";
import { PermissionService } from "../../../../shared/services/permission.service";
import { forkJoin } from "rxjs";

@Component({
	selector: 'app-user-role-and-permission',
	templateUrl: './user-role-and-permission.component.html',
})
export class UserRoleAndPermissionComponent extends BaseComponent implements OnInit {
	selectedModuleName: string;
	selectedModulePermission: any[] = [];
	allPermissions: any[] = [];
	selectedPermissions: any[] = [];
	isSavingPermissions = false;
	userPermissionNamesArray: any = []
	currentUserId: number;
	filteredPermissionOfUser: { permissions: any; moduleName: any }[]
	isEditMode = false;
	
	constructor(injector: Injector, private service: RoleService, private permissionService: PermissionService) {
		super(injector);
		this.currentUserId = +this.activatedRouter.parent.snapshot.params?.['employee_id'];
	}
	
	ngOnInit() {
		forkJoin({
			permissions: this.permissionService.getAll(),
		}).subscribe({
			next: (res) => {
				this.allPermissions = res.permissions;
				this.getUserPermissionAndMapWithAllPermission();
			},
			error: (err) => {
				console.error('Error loading roles or permissions', err);
			}
		});
	}
	
	savePermission() {
		if (this.currentUserId) {
			this.isSavingPermissions = true
			this.permissionService.updateUserDirectPermission(this.currentUserId, {
				selectedPermission: this.selectedPermissions,
			}).subscribe({
				next: (res) => {
					this.getUserPermissionAndMapWithAllPermission();
					this.selectedModuleName = this.filteredPermissionOfUser[0].moduleName;
					this.notify('User Permission Updated Successfully!');
				},
				error: (err) => {
					this.showErrorInNotifier(err);
					console.log(err);
				},
			}).add(() => {
				this.isSavingPermissions = false
				this.isEditMode = false;
			})
		}
	}
	
	getUserPermissionAndMapWithAllPermission() {
		this.permissionService.getByUserId(this.currentUserId).subscribe({
			next: res => {
				this.userPermissionNamesArray = res;
				this.filteredPermissionOfUser = this.mapUserPermissionWithAllPermission(res);
				this.selectedModulePermission = this.filteredPermissionOfUser[0]?.permissions;
				this.selectedModuleName = this.filteredPermissionOfUser[0].moduleName;
			},
			error: err => {
				console.log(err)
			}
		})
	}
	
	mapUserPermissionWithAllPermission(userPermissions: any) {
		return this.allPermissions.map(module => {
			const moduleName = module.name;
			
			// Get permissions for the current module from the role-wise array
			const moduleUserPermissions = userPermissions[moduleName] || [];
			return {
				moduleName: moduleName,
				permissions: module.items.map((permission: { name: any; display_name: any; }) => {
					// Check if the permission is included in the moduleRolePermissions
					const hasPermission = moduleUserPermissions.some((userPermission: {
						name: any;
					}) => userPermission.name === permission.name);
					
					const updatedPermission = {
						name: permission.name,
						display_name: permission.display_name,
						hasPermission: hasPermission,
					};
					
					if (hasPermission) {
						this.selectedPermissions.push(updatedPermission);
					}
					
					return updatedPermission;
				}),
			};
		});
	}
	
	setModulePermissions(moduleName: any) {
		this.selectedModuleName = moduleName;
		this.selectedModulePermission = this.filteredPermissionOfUser.find(res => res.moduleName === moduleName)?.permissions;
	}
	
	onPermissionChange(permission: any, event: any) {
		if (event.target.checked) {
			// If permission is checked and not already present, add it to the selected permissions
			if (this.isPermissionPresent(permission.name) === false) {
				this.selectedPermissions.push(permission);
			}
			
		} else {
			// If permission is unchecked, remove it from the selected permissions
			this.selectedPermissions = this.selectedPermissions.filter(
				selectedPermission => selectedPermission.name !== permission.name
			);
		}
	}
	
	isPermissionPresent(permissionName: string): boolean {
		// If the module exists, check its permissions for the given permission name
		return this.selectedPermissions.some((permission: {
			name: string;
		}) => permission.name === permissionName) || false;
	}
}
