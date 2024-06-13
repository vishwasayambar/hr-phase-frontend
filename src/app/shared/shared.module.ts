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

const COMMON_COMP_LIST: any[] | Type<any> = [
	SaveBtnComponent,
];

const COMMON_STANDALONE_COMP_LIST: any[] | Type<any> = [
	DropdownActionComponent,
	HoverDirective,
	UserPopoverComponent,
	UserNotificationChannelComponent,
	AddressComponent,
	BankComponent,
	UserRoleDropdownComponent,
	ControlContainerComponent,
];

@NgModule({
    declarations: [
        COMMON_COMP_LIST,

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
