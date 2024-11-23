import {UntypedFormBuilder, Validators} from "@angular/forms";

export class Department {
	id: number;
	name: string;
	created_at: Date;
	updated_at: Date;
	
	constructor(paramsObject: object) {
		return Object.assign(this, paramsObject);
	}
	
	static getForm(bank: Department) {
		return new UntypedFormBuilder().group({
			id: [bank.id || null],
			name: [bank.name || null, [Validators.required]],
		});
	}
}
