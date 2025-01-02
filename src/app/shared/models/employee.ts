import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom-validators";
import {Address} from "./address";
import {Bank} from "./bank";

export class Employee {
	id: number;
	type_id: number;
	name: string;
	avatar: string;
	display_name: string;
	email: string;
	mobile_number: string;
	phone_number: string;
	emergency_contact_name: string;
	emergency_contact_number: string;
	father_name: string;
	unique_identification_number: string;
	tax_number: string;
	probation_period: number;
	date_of_joining: Date;
	reporting_manager_id: number;
	department_id: number;
	grade: string;
	attendance_scheme: string;
	pf_number: string;
	uan_number: number;
	date_of_birth: Date;
	gender: boolean;
	bank: Bank;
	address: [];
	is_active: boolean;
	roles: { name: string, id: string }[];
	data: any;
	ip: string;
	ip_addresses: string;
	firebase_uid: string;
	email_verified_at: Date;
	custom_fields: [];
	role_id: number;
	last_login: Date;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
	// attachments: Attachment;
	payment_received: number;
	payment_remaining: number;
	
	constructor(paramsObject: object) {
		return Object.assign(this, paramsObject);
	}
	
	static getForm(employee: Employee): UntypedFormGroup {
		return new UntypedFormBuilder().group({
			id: [employee.id || null],
			role_id: [employee.roles && employee.roles.length ? employee.roles[0].id : null, Validators.required],
			name: [employee.name || null, [Validators.required]],
			display_name: [employee.display_name || null],
			email: [employee.email || null, Validators.required],
			date_of_birth: [employee.date_of_birth || null],
			tax_number: [employee.tax_number || null],
			// custom_fields: ShowCustomFields.getFormArray(employee.custom_fields),
			unique_identification_number: [employee.unique_identification_number || null],
			mobile_number: [employee.mobile_number || null, [Validators.required]],
			phone_number: [employee.phone_number || null, [CustomValidators.phoneNumberValidator, Validators.maxLength(10)]],
			emergency_contact_name: [employee.emergency_contact_name || null],
			emergency_contact_number: [employee.emergency_contact_number || null],
			father_name: [employee.father_name || null],
			gender: [employee.gender || null],
			reporting_manager_id: [employee.reporting_manager_id || null],
			department_id: [employee.department_id || null],
			grade: [employee.grade || null],
			attendance_scheme: [employee.attendance_scheme || null],
			date_of_joining: [employee.date_of_joining || null],
			probation_period: [employee.probation_period || null],
			pf_number: [employee.pf_number || null],
			uan_number: [employee.uan_number || null],
			address: Address.getFormArray(employee.address),
			bank: Bank.getFormArray(employee.bank),
			// ip_addresses: IpAddress.getFormArray(employee.ip_addresses),
			is_send_mail: new UntypedFormControl(false),
			is_send_sms: new UntypedFormControl(false),
			is_send_web: new UntypedFormControl(false),
		});
	}
}
