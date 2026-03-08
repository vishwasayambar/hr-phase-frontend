import {Injectable} from "@angular/core";
import {DEPARTMENT_PATH} from "../constants/constant";
import {ApiService} from "./api.service";
import {BaseService} from "./base.service";
import {Department} from "../models/Department";

@Injectable({
	providedIn: "root",
})
export class DepartmentService extends BaseService<Department, number> {
	private endpoint = DEPARTMENT_PATH;
	
	constructor(protected override api: ApiService) {
		super(api, DEPARTMENT_PATH);
	}
}
