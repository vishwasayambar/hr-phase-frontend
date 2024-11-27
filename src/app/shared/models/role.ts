import { UntypedFormBuilder, Validators } from "@angular/forms";

export class Role {
    id: number;
    name: string;
    display_name: string;
    guard_name: string;
    created_at: Date;
    updated_at: Date;

    constructor(paramsObject: object) {
        return Object.assign(this, paramsObject);
    }
    
    static getForm(role: Role) {
        return new UntypedFormBuilder().group({
            id: [role.id || null],
            name: [role.name || null, [Validators.required]],
            display_name: [role.display_name || null, [Validators.required]],
            guard_name: [role.display_name || 'api', [Validators.required]],
        });
    }
}
