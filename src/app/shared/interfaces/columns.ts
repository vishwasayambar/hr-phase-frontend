import { Employee } from "../models/employee";
import { Department } from "../models/Department";

export class Columns {
	fieldName?: keyof Employee | keyof Department;
	label: string;
	template?: string;
	visible: boolean;
}

export class DepartmentColumns {
	fieldName?: keyof Department;
	label: string;
	template?: string;
	visible: boolean;
}
