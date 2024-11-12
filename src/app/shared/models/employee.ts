import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom-validators";
import { Address } from "./address";
import { Bank } from "./bank";

export class Employee {
    id: number;
    type_id: number;
    name: string;
    avatar: string;
    display_name: string;
    email: string;
    mobile_number: string;
    phone_number: string;
    unique_identification_number: string;
    tax_number: string;
    date_of_birth: Date;
    gender: boolean;
    ip: string;
    ip_addresses: string;
    address: [];
    bank: Bank;
    firebase_uid: string;
    email_verified_at: Date;
    custom_fields: [];
    role_id: number;
    is_active: boolean;
    last_login: Date;
    created_at: Date;
    updated_at: Date;
    roles: { name:string , id:string }[];
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
            gender: [employee.gender || null],
            address: Address.getFormArray(employee.address),
            bank: Bank.getFormArray(employee.bank),
            // ip_addresses: IpAddress.getFormArray(employee.ip_addresses),
            is_send_mail: new UntypedFormControl(false),
            is_send_sms: new UntypedFormControl(false),
            is_send_web: new UntypedFormControl(false),
        });
    }
}
