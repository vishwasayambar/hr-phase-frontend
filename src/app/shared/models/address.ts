import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";

export class Address {
	id: number;
	address_line: string;
	city: string;
	state: string;
	zip_code: string;
	created_at: Date;
	updated_at: Date;


	constructor(paramsObject: object) {
		return Object.assign(this, paramsObject);
	}

	static getForm(address: Address): UntypedFormGroup {
		return new UntypedFormBuilder().group({
			id: [address.id || null],
			address_line: [address.address_line || null],
			city: [address.city || null],
			state: [address.state || null],
			zip_code: [address.zip_code || null],
		});
	}

	static getFormArray(address: []): UntypedFormArray {
		const customFieldsArrayControl = new UntypedFormArray([]);
		if (address && address.length) {
			address.forEach((item: any) => {
				customFieldsArrayControl.push(Address.getForm(item));
			});
		}

		return customFieldsArrayControl;
	}
}
