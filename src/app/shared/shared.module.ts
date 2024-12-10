import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddressComponent } from "./components/address/address.component";
import { BankComponent } from "./components/bank/bank.component";
import { ControlContainerComponent } from "./components/control-container/control-container.component";
import { SaveBtnComponent } from './components/save-btn/save-btn.component';
import {
	UserNotificationChannelComponent
} from "./components/user-notification-channel/user-notification-channel.component";
import { UserRoleDropdownComponent } from "./components/user-role-dropdown/user-role-dropdown.component";
import { HoverDirective } from "./directives/hover.directive";
import { UserPopoverComponent } from "./popovers/user-popover/user-popover.component";
import { DropdownActionComponent } from "./ui-components/dropdown-action/dropdown-action.component";
import { TabsComponent } from "./ui-components/tabs/tabs.component";
import {PaginationComponent} from "./ui-components/pagination/pagination.component";
import {ConfirmationPopupComponent} from "./components/confirmation-popup/confirmation-popup.component";
import { UserBadgeComponent } from './components/user-badge/user-badge.component';
import { ManagerDropdownComponent } from './components/manager-dropdown/manager-dropdown.component';
import {SearchableDropdownComponent} from "./ui-components/searchable-dropdown/searchable-dropdown.component";
import { DepartmentDropdownComponent } from './components/department-dropdown/department-dropdown.component';
import { SelectDropdownComponent } from './ui-components/select-dropdown/select-dropdown.component';
import { CustomDropdownComponent } from './ui-components/custom-dropdown/custom-dropdown.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SaveCancelBtnComponent } from './components/save-cancel-btn/save-cancel-btn.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

const COMMON_COMP_LIST: any[] | Type<any> = [
	DataGridComponent,
	SaveBtnComponent,
	UserBadgeComponent,
	UserPopoverComponent,
	ManagerDropdownComponent,
	SearchableDropdownComponent,
	DepartmentDropdownComponent,
	SelectDropdownComponent,
	UserRoleDropdownComponent,
	CustomDropdownComponent,
	UserProfileComponent,
	SaveCancelBtnComponent,
];

const COMMON_STANDALONE_COMP_LIST: any[] | Type<any> = [
	DropdownActionComponent,
	HoverDirective,
	UserNotificationChannelComponent,
	AddressComponent,
	BankComponent,
	ControlContainerComponent,
	TabsComponent,
	PaginationComponent,
	ConfirmationPopupComponent,
];

@NgModule({
    declarations: [
        COMMON_COMP_LIST,
        ManagerDropdownComponent,
    ],
	exports: [
		COMMON_COMP_LIST,
		COMMON_STANDALONE_COMP_LIST,
		FormsModule,
		ReactiveFormsModule,
	],
    imports: [
		COMMON_STANDALONE_COMP_LIST,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    providers: [],
})
export class SharedModule {}
