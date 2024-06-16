export class Role {
    id: number;
    name: string;
    display_name: string;
    created_at: Date;
    updated_at: Date;

    constructor(paramsObject: object) {
        return Object.assign(this, paramsObject);
    }
}
