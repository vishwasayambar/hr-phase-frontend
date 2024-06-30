import {Component, Injector} from '@angular/core';
import {MODULE_WISE_PERMISSION_TABS} from "../../../../shared/constants/constant";
import {BaseComponent} from "../../../../shared/base-component";

@Component({
    selector: 'app-roles-and-permission',
    templateUrl: './roles-and-permission.component.html',
})
export class RolesAndPermissionComponent extends BaseComponent {
    moduleWisePermissionTabs = Object.values(MODULE_WISE_PERMISSION_TABS);
    currentTab: string;

    constructor(injector: Injector) {
        super(injector);
    }

    setCurrentTab(currentTab: string) {
        this.currentTab = currentTab;
    }
}
