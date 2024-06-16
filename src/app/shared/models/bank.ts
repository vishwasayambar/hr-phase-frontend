import { UntypedFormArray, UntypedFormBuilder, Validators } from "@angular/forms";

export class Bank {
	id: number;
	account_name: string;
	account_number: number;
	ifsc_code: string;
	branch_name: string;
	bank_name: string;
	created_at: Date;
	updated_at: Date;

	constructor(paramsObject: object) {
		return Object.assign(this, paramsObject);
	}

	static getForm(bank: Bank, isMandatory = true) {
		return new UntypedFormBuilder().group({
			id: [bank.id || null],
			account_name: [bank.account_name || null, isMandatory ? [Validators.required] : []],
			account_number: [bank.account_number || null, isMandatory ? [Validators.required] : []],
			ifsc_code: [bank.ifsc_code || null, isMandatory ? [Validators.required] : []],
			branch_name: [bank.branch_name || null],
			bank_name: [bank.bank_name || null, isMandatory ? [Validators.required] : []],
		});
	}

	static getFormArray(bank: any): UntypedFormArray {
		const customFieldsArrayControl = new UntypedFormArray([]);
		if (bank && bank.length) {
			bank.forEach((item: any) => {
				customFieldsArrayControl.push(Bank.getForm(item));
			});
		}

		return customFieldsArrayControl;
	}
}
