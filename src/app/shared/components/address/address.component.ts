import { Component, Injector, Input, OnInit } from "@angular/core";
import { FormArray, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from "@angular/forms";
import { BaseComponent } from "../../base-component";
import { Address } from "../../models/address";
import { ControlContainerComponent } from "../control-container/control-container.component";
import {NgClass} from "@angular/common";

@Component({
	selector: "app-address",
	standalone: true,
	imports: [
		ControlContainerComponent,
		FormsModule,
		ReactiveFormsModule,
		NgClass
	],
	templateUrl: "./address.component.html",
})
export class AddressComponent extends BaseComponent implements OnInit {
	@Input() form: UntypedFormGroup;
	@Input() id = "address";
	stateList: any = [];
	cityList: any = [];

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit(): void {

	}

	get addressControls(): FormArray {
		return this.form.get("address") as FormArray;
	}

	removeAddress(i: number): void {
		const customFields = this.form.get("address") as UntypedFormArray;
		customFields.removeAt(i);
	}

	addAddress(): void {
		const fields = this.form.get("address") as UntypedFormArray;
		fields.push(Address.getForm(new Address({})));
	}
}
