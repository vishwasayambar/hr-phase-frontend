import {Component, Injector} from '@angular/core';
import {BaseComponent} from "../../shared/base-component";
import {ACCOUNT_SETTING_TABS} from "../../shared/constants/constant";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
})
export class AccountComponent extends BaseComponent {
    accountSettingTabs = Object.values(ACCOUNT_SETTING_TABS)
    currentTab: string

    constructor(injector: Injector) {
        super(injector);
    }

    setCurrentTab(currentTab: string) {
        this.currentTab = currentTab;
    }
}
