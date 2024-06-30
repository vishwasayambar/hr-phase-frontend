import {Component, Injector} from '@angular/core';
import {ACCOUNT_SETTING_TABS} from "../../../../shared/constants/constant";
import {BaseComponent} from "../../../../shared/base-component";

@Component({
    selector: 'app-account-setting-tabs',
    templateUrl: './account-setting-tabs.component.html',
})
export class AccountSettingTabsComponent extends BaseComponent {
    accountSettingTabs = Object.values(ACCOUNT_SETTING_TABS)
    currentTab: string

    constructor(injector: Injector) {
        super(injector);
    }

    setCurrentTab(currentTab: string) {
        this.currentTab = currentTab;
    }
}
