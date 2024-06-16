import { environment } from "../../../environments/environment";

const API_PREFIX = "/api/";
const hostOrigin = window.location.origin;
let subDomain = hostOrigin.substring(hostOrigin.indexOf("/") + 2, hostOrigin.indexOf("."));
subDomain = subDomain !== "" ? subDomain + "." : "";
export const SERVER_URL = `${window.location.protocol}//${environment.baseUrl + API_PREFIX}`;
export const REGISTRATION_PATH = "register";
export const AUTH_PATH = "auth/";
export const DASHBOARD = "/dashboard";
export const EMPLOYEE_PATH = "employees";
export const ROLE_PATH = "roles";

export enum GENDER_LIST {
	MALE = "Male",
	FEMALE = "Female",
	OTHER = "Other",
}
export enum TENANT_PLANS {
	STARTER = "Starter",
	ESSENTIAL = "Essential",
	ENTERPRISE = "Enterprise",
}
export enum TABLE_COLUMN_TEMPLATE {
	NAME = "name",
	EMAIL = "email",
	POSITION = "position",
	STATUS = "status",
	ACTION = "action",
}
export enum EMPLOYEE_PROFILE_TABS {
	PROFILE = "Profile",
	ADDRESS = "Address",
	BANK = "Bank",
	EDUCATIONAL_DETAIL = "Education",
	FAMILY_DETAIL = "Family",
}
