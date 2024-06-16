

export class Tenant {
    id: number;
    name: string;
    plan: any;
    whats_app_number: string;
    support_number: string;
    support_email: string;
    sms_credits: number;
    account_id: number;
    domain_url: string;
    is_completed_wizard_setup: boolean;
    logo: string;
    workspaces: Array<Tenant>;
    signature: string;
    trial_ends_at: Date;
    created_at: Date;
    updated_at: Date;

    constructor(paramsObject: object) {
        return Object.assign(this, paramsObject);
    }
}
