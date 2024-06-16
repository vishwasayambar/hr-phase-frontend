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

export const EMPLOYEE_PROFILE_TABS = [
	{
		id: "profile-styled-tab",
		label: "Profile",
		key: "profile",
		tabElementId: "1",
		triggerEl: "#profile-styled-tab",
		targetEl: "#styled-profile",
	},
	{
		id: "address-styled-tab",
		label: "Address",
		key: "address",
		tabElementId: "2",
		triggerEl: "#address-styled-tab",
		targetEl: "#styled-address",
	},
	{
		id: "bank-styled-tab",
		label: "Bank",
		key: "bank",
		tabElementId: "3",
		triggerEl: "#bank-styled-tab",
		targetEl: "#styled-bank",
	},
	{
		id: "educational-styled-tab",
		label: "Education",
		key: "educational",
		tabElementId: "4",
		triggerEl: "#educational-styled-tab",
		targetEl: "#styled-educational",
	}
];
