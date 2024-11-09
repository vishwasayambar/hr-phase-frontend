import {Employee} from "../models/employee";

export class EmployeeColumn {
	fieldName?: keyof Employee;
	label: string;
	template?: string;
	visible: boolean;
}
