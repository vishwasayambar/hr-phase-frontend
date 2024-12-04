import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../shared/base-component";
import { RoleService } from "../../../../shared/services/role.service";
import { PermissionService } from "../../../../shared/services/permission.service";
import { Role } from "../../../../shared/models/role";
import { forkJoin } from "rxjs";
import { Permission } from "../../../../shared/models/permission";

@Component({
	selector: 'app-roles-and-permission',
	templateUrl: './roles-and-permission.component.html',
})
export class RolesAndPermissionComponent extends BaseComponent implements OnInit {
	selectedModuleName: string;
	selectedModulePermission: any[] = [];
	roles: Role[] = [];
	roleWisePermissionArray: any[] = [];
	allPermissions: Permission[] = [];
	selectedPermissions: any[] = [];
	currentRoleId: number;
	currentRole: Role;
	isSavingPermissions = false;
	filteredPermissionOfRole: { moduleName: string, permissions: any[] }[];
	
	constructor(injector: Injector, private service: RoleService, private permissionService: PermissionService) {
		super(injector);
	}
	
	ngOnInit() {
		// Load roles and permissions in parallel using forkJoin
		forkJoin({
			roles: this.service.getRoles(),
			permissions: this.permissionService.getAll(),
		}).subscribe({
			next: (res) => {
				this.roles = res.roles; // Save roles
				this.currentRoleId = res.roles[0]?.id; // Default to the first role Id
				this.currentRole = res.roles[0]; // Default to the first role
				this.allPermissions = res.permissions; // Save permissions
				if (this.currentRoleId) {
					this.onRoleChange(this.currentRole); // Load permissions for the selected role
				}
			},
			error: (err) => {
				console.error('Error loading roles or permissions', err);
			},
		});
	}
	
	// Save the selected and deselected permissions for the current role
	syncRolePermission() {
		if (this.currentRoleId) {
			this.isSavingPermissions = true
			this.permissionService.assignPermissionsToRole(this.currentRoleId, {
				selectedPermission: this.selectedPermissions,
			}).subscribe({
				next: (res) => {
					this.onRoleChange(this.currentRole); // To fetch the updated permissions
					this.notify("Permission Added for Role.")
				},
				error: (err) => {
					console.log(err)
				},
			}).add(() => {
				this.isSavingPermissions = false
			})
		}
	}
	
	
	// Map permissions with roles to identify which permissions a role has
	mapPermissionsWithRoles(allPermissions: any[], roleWisePermissions: any[]) {
		return allPermissions.map(module => {
			const moduleName = module.name;
			
			// Get permissions for the current module from the role-wise array
			const moduleRolePermissions = roleWisePermissions[moduleName] || [];
			return {
				moduleName: moduleName,
				permissions: module.items.map((permission: { name: any; display_name: any; }) => {
					// Check if the permission is included in the moduleRolePermissions
					const hasPermission = moduleRolePermissions.some((rolePermission: {
						name: any;
					}) => rolePermission.name === permission.name);
					
					const updatedPermission = {
						name: permission.name, // Permission name
						display_name: permission.display_name, // Display name of the permission
						hasPermission: hasPermission, // Whether the permission is assigned
					};
					// Add permission to selectedPermissions if the role already has it
					if (hasPermission) {
						this.selectedPermissions.push(updatedPermission);
					}
					return updatedPermission; // Return the updated permission object
				}),
			};
		});
	}
	
	// When the role changes, update the permissions view like get roles selected and deselected permissions
	onRoleChange(role: Role) {
		this.currentRoleId = role.id;
		this.currentRole = role;
		this.selectedPermissions = [];
		this.permissionService.getByRoleId(role.id).subscribe({
			next: res => {
				this.roleWisePermissionArray = res;
				this.filteredPermissionOfRole = this.mapPermissionsWithRoles(this.allPermissions, this.roleWisePermissionArray)
				this.selectedModulePermission = this.filteredPermissionOfRole[0]?.permissions;
				this.selectedModuleName = this.filteredPermissionOfRole[0]?.moduleName;
			},
			error: err => {
				console.log(err)
			}
		})
	}
	
	getModulePermissions(moduleName: any) {
		this.selectedModuleName = moduleName;
		this.selectedModulePermission = this.filteredPermissionOfRole.find(res => res.moduleName === moduleName)?.permissions;
	}
	
	onPermissionChange(permission: any, event: any) {
		if (event.target.checked) {
			// If permission is checked and not already present, add it to the selected permissions
			if (this.isPermissionPresent(permission.name) === false) {
				permission.hasPermission = true;
				this.selectedPermissions.push(permission);
			}
		} else {
			// If permission is unchecked, remove it from the selected permissions
			this.selectedPermissions = this.selectedPermissions.filter(
				selectedPermission => selectedPermission.name !== permission.name
			);
		}
	}

// Check if a permission is already selected
	isPermissionPresent(permissionName: string): boolean {
		// Return true if the permission exists in the selected permissions array
		return this.selectedPermissions.some((permission: { name: string; }) =>
			permission.name === permissionName
		) || false;
	}


// Handle actions when a new role is created
	roleCreated(role: Role) {
		this.roles = [role, ...this.roles]; // Add the new role to the roles list
		this.currentRole = role; // Set the new role as the current role
		this.onRoleChange(role); // Reload permissions for the new role
	}
	
	
	filterChange(event: any) {
		//TODO:: This is for if we have add something on search in Input of Role select box
	}
}
