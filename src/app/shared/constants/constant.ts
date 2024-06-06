import { environment } from "../../../environments/environment";

const API_PREFIX = "/api/";
const hostOrigin = window.location.origin;
let subDomain = hostOrigin.substring(hostOrigin.indexOf("/") + 2, hostOrigin.indexOf("."));
subDomain = subDomain !== "" ? subDomain + "." : "";
export const SERVER_URL = `${window.location.protocol}//${environment.baseUrl + API_PREFIX}`;
export const REGISTRATION_PATH = "register";
export const AUTH_PATH = "auth/";
export const DASHBOARD = "/dashboard";

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
