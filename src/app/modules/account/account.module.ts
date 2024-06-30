import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import {TabsComponent} from "../../shared/ui-components/tabs/tabs.component";
import { RolesAndPermissionComponent } from './components/roles-and-permission/roles-and-permission.component';
import {BankComponent} from "../../shared/components/bank/bank.component";
import { AccountSettingTabsComponent } from './components/account-setting-tabs/account-setting-tabs.component';


@NgModule({
  declarations: [
    AccountComponent,
    RolesAndPermissionComponent,
    AccountSettingTabsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TabsComponent,
    BankComponent
  ]
})
export class AccountModule { }
