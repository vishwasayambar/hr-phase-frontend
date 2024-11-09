import {environment} from "../../../environments/environment";

const API_PREFIX = "/api/";
const hostOrigin = window.location.origin;
let subDomain = hostOrigin.substring(hostOrigin.indexOf("/") + 2, hostOrigin.indexOf("."));
subDomain = subDomain !== "" ? subDomain + "." : "";
export const SERVER_URL = `${window.location.protocol}//${environment.baseUrl + API_PREFIX}`;
export const REGISTRATION_PATH = "register";
export const AUTH_PATH = "auth/";
export const DASHBOARD = "/dashboards";
export const EMPLOYEE_PATH = "employees";
export const ROLE_PATH = "roles";
export const PERMISSION_PATH = "permissions";

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

export const COMPONENT_SIZES = {
    DEFAULT: "default",
    SMALL: "small",
    SMALL_1X: "small-1x",
    MEDIUM: "medium",
    SIDEBAR: "sidebar",
    LARGE: "large",
    EXTRA_LARGE: "extra-large",
    DROPDOWN_PROFILE_IMAGES: "dropdown-profile-image"
};

export const EMPLOYEE_PROFILE_TABS = [
    {
        id: 1,
        label: "Profile",
        key: "profile",
        icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
        tabElementId: "1",
		triggerTabsId: "profile-styled-tab",
        triggerEl: "#profile-styled-tab",
        targetEl: "#styled-profile",
    },
    {
        id: 2,
        label: "Address",
        key: "address",
        icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
        tabElementId: "2",
		triggerTabsId: "address-styled-tab",
        triggerEl: "#address-styled-tab",
        targetEl: "#styled-address",
    },
    {
        id: 3,
        label: "Bank",
        key: "bank",
        icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
        tabElementId: "3",
		triggerTabsId: "bank-styled-tab",
        triggerEl: "#bank-styled-tab",
        targetEl: "#styled-bank",
    },
    {
        id: 4,
        label: "Education",
        key: "educational",
        tabElementId: "4",
        icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
		triggerTabsId: "educational-styled-tab",
        triggerEl: "#educational-styled-tab",
        targetEl: "#styled-educational",
    }
];
export const ACCOUNT_SETTING_TABS = [
    {
        id: 1,
        label: "Business settings",
        key: "business_settings",
        icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
        tabElementId: "1",
		triggerTabsId: "business_setting-tab",
        triggerEl: "#business_setting-tab",
        targetEl: "#business_setting",
    },
    {
        id: 2,
        label: "Roles and Permissions",
        key: "roles_and_permissions",
        icon: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
        tabElementId: "2",
		triggerTabsId: "roles_and_permission-tab",
        triggerEl: "#roles_and_permission-tab",
        targetEl: "#roles_and_permission",
    },
    // {
    //     id: 3,
    //     label: "Bank",
    //     key: "bank",
    //     tabElementId: "3",
	// 	triggerTabsId: "bank-styled-tab",
    //     triggerEl: "#bank-styled-tab",
    //     targetEl: "#styled-bank",
    // },
    // {
    //     id: 4,
    //     label: "Education",
    //     key: "educational",
    //     tabElementId: "4",
	// 	triggerTabsId: "educational-styled-tab",
    //     triggerEl: "#educational-styled-tab",
    //     targetEl: "#styled-educational",
    // }
];
export const MODULE_WISE_PERMISSION_TABS = [
    {
        id: 1,
        label: "Profile",
        key: "profile",
        tabElementId: "1",
        triggerTabsId: "business_settings-tab",
        triggerEl: "#profile-styled-tab",
        targetEl: "#styled-profile",
    },
    {
        id: 2,
        label: "Address",
        key: "address",
        tabElementId: "2",
        triggerTabsId: "address-styled-tab",
        triggerEl: "#address-styled-tab",
        targetEl: "#styled-address",
    },
    {
        id: 3,
        label: "Bank",
        key: "bank",
        tabElementId: "3",
        triggerTabsId: "bank-styled-tab",
        triggerEl: "#bank-styled-tab",
        targetEl: "#styled-bank",
    },
    {
        id: 4,
        label: "Education",
        key: "educational",
        tabElementId: "4",
        triggerTabsId: "educational-styled-tab",
        triggerEl: "#educational-styled-tab",
        targetEl: "#styled-educational",
    }
];

export const PERMISSION_LIST = {
    BUSINESS_SETTING_VIEW: "business_settings.view",
    BUSINESS_SETTING_WRITE: "business_settings.write",
    SALE_WRITE: "sale.write",
    SALE_LIST: "sale.list",
    SALE_DELETE: "sale.delete",
    PART_WRITE: "part.write",
    PART_LIST: "part.list",
    PART_DELETE: "part.delete",
    PART_SUPPLIER_WRITE: "part_supplier.write",
    PART_SUPPLIER_LIST: "part_supplier.list",
    PART_SUPPLIER_DELETE: "part_supplier.delete",
    PURCHASE_WRITE: "purchase.write",
    PURCHASE_LIST: "purchase.list",
    PURCHASE_DELETE: "purchase.delete",
    REPORT_VIEW: "report.view",
    EMPLOYEE_WRITE: "employee.write",
    EMPLOYEE_LIST: "employee.list",
    TASK_WRITE: "task.write",
    TASK_LIST: "task.list",
    TASK_DELETE: "task.delete",
    BILLING_LIST: "billing.list",
    EXPENSES_WRITE: "expense.write",
    EXPENSES_LIST: "expense.list",
    EXPENSES_DELETE: "expense.delete",
    EXPENSE_CATEGORY_WRITE: "expense_category.write",
    EXPENSE_CATEGORY_LIST: "expense_category.list",
    EXPENSE_CATEGORY_DELETE: "expense_category.delete",
    PAYMENT_WRITE: "payment.write",
    PAYMENT_DELETE: "payment.delete",
    QUICK_REPLY_WRITE: "quick_reply.write",
    QUICK_REPLY_LIST: "quick_reply.list",
    QUICK_REPLY_DELETE: "quick_reply.delete",
};