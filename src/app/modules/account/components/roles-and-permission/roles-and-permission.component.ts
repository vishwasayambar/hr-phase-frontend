import {Component, Injector, OnInit} from '@angular/core';
import {MODULE_WISE_PERMISSION_TABS} from "../../../../shared/constants/constant";
import {BaseComponent} from "../../../../shared/base-component";
import {RoleService} from "../../../../shared/services/role.service";
import {PermissionService} from "../../../../shared/services/permission.service";
import {Role} from "../../../../shared/models/role";
import {forkJoin} from "rxjs";

@Component({
    selector: 'app-roles-and-permission',
    templateUrl: './roles-and-permission.component.html',
})
export class RolesAndPermissionComponent extends BaseComponent implements OnInit {
    moduleWisePermissionTabs = Object.values(MODULE_WISE_PERMISSION_TABS);
    currentTab: string;
    selectedModuleName: string;
    selectedModulePermission: any[] = [];
    roles: Role[] = [];
    roleWisePermissionArray: any[] = [];
    allPermissions: any[] = [];
    groupedPermissions: any[] = [];
    selectedPermissions: any[] = [];
    value: number;
    isSavingPermissions = false;
    permissionId: number;
    modules: any = [

    ]

    constructor(injector: Injector, private service: RoleService, private permissionService: PermissionService) {
        super(injector);
    }

    ngOnInit() {
        forkJoin({
            roles: this.service.getRoles(),
            permissions: this.permissionService.getAll(),
        }).subscribe({
            next: (res) => {
                this.roles = res.roles;
                this.value = res.roles[0]?.id; // Use optional chaining to avoid errors if roles array is empty
                this.allPermissions = res.permissions;
                if (this.value) {
                    this.onValueChange(this.value);
                }
            },
            error: (err) => {
                console.error('Error loading roles or permissions', err);
            }
        });
    }

    savePermission(){
        if(this.value){
        this.isSavingPermissions = true
            this.permissionService.saveRolePermissions(this.value, this.selectedPermissions).subscribe({
                next: (res) => {
                    console.log(res)
                },
                error: (err) => {
                    console.log(err)
                },
            }).add(() => {
                this.isSavingPermissions = false
            })
        }
    }

    onValueChange(value: number) {
        this.value = value;
        console.log(value);

            this.permissionService.getByRoleId(value).subscribe({
                next: res => {
                    this.roleWisePermissionArray = res;
                        this.groupPermissions();
                    console.log(this.roleWisePermissionArray, "Permission Array");
                },
                error: err => {
                    console.log(err)
                }
            })
    }

    groupPermissions() {
        this.groupedPermissions = [];
        for (let key in this.roleWisePermissionArray) {
            if (this.roleWisePermissionArray.hasOwnProperty(key)) {
                this.groupedPermissions.push({
                    moduleName: key,
                    permissions: this.roleWisePermissionArray[key]
                });
                this.selectedModulePermission = this.roleWisePermissionArray[this.groupedPermissions[0]['moduleName']];
            }
        }
    }

    setModulePermissions(moduleName:any){
        this.selectedModuleName = moduleName;
        this.selectedModulePermission = this.roleWisePermissionArray[moduleName]
        console.log(this.selectedModulePermission);
    }

    onPermissionChange(permission: any, event: any) {
        debugger
        if (event.target.checked) {
            this.selectedPermissions.push(permission);
        } else {
            const index = this.selectedPermissions.findIndex(p => p.id === permission.id);
            if (index > -1) {
                this.selectedPermissions.splice(index, 1);
            }
        }
    }


}
