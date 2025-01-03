import { Component, Injector, input, Input, OnInit } from "@angular/core";
import { FormArray, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from "@angular/forms";
import { BaseComponent } from "../../base-component";
import { Bank } from "../../models/bank";
import { ControlContainerComponent } from "../control-container/control-container.component";
import {NgClass} from "@angular/common";

@Component({
	selector: "app-bank",
	standalone: true,
	imports: [
		ControlContainerComponent,
		FormsModule,
		ReactiveFormsModule,
		NgClass
	],
	templateUrl: "./bank.component.html",
})
export class BankComponent extends BaseComponent implements OnInit {
	@Input() form: UntypedFormGroup;
	@Input() id = "bank";
	isEditMode = input(true)
	stateList: any = [];
	cityList: any = [];

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit(): void {

	}

	get bankControls(): FormArray {
		return this.form.get("bank") as FormArray;
	}

	removeBank(i: number): void {
		const customFields = this.form.get("bank") as UntypedFormArray;
		customFields.removeAt(i);
	}

	addBank(): void {
		const fields = this.form.get("bank") as UntypedFormArray;
		fields.push(Bank.getForm(new Bank({})));
	}
}
