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
export const DEPARTMENT_PATH = "departments";
export const PERMISSION_PATH = "permissions";

export enum GENDER_LIST {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other",
}

export const USER_STATUS_LIST = [
    'Active',
    'In Active'
];

export enum ATTENDANCE_SCHEME_LIST {
    GENERAL_SCHEME = "General Scheme",
}

export enum GRADE_LIST {
  G3 = 'G3',
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

export enum EMPLOYEE_ACTION_BUTTON_NAME_LIST {
    VIEW_EMPLOYEE = "View Employee",
    CHANGE_STATUS = "Change Status",
    FORGET_USER = "Forget User",
}

export enum ENTITIES {
    NAME = "name", // This is for those having id, name to access nameTemplate
    EMPLOYEE = "employee",
    ROLE = "role",
    DEPARTMENT = "department",
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
        icon: "bi bi-person-circle",
        tabElementId: "1",
		triggerTabsId: "profile-styled-tab",
        triggerEl: "#profile-styled-tab",
        targetEl: "#styled-profile",
    },
    {
        id: 2,
        label: "Address",
        key: "address",
        icon: "bi bi-house-door-fill",
        tabElementId: "2",
		triggerTabsId: "address-styled-tab",
        triggerEl: "#address-styled-tab",
        targetEl: "#styled-address",
    },
    {
        id: 3,
        label: "Employee Position",
        key: "employee_position",
        icon: "bi bi-person-rolodex",
        tabElementId: "3",
        triggerTabsId: "employee-position-styled-tab",
        triggerEl: "#employee-position-styled-tab",
        targetEl: "#styled-employee-position",
    },
    {
        id: 4,
        label: "PE,ESI & LWF",
        key: "pf_esi_lwf",
        icon: "bi bi-bank2",
        tabElementId: "4",
        triggerTabsId: "pf-esi-lwf-styled-tab",
        triggerEl: "#pf-esi-lwf-styled-tab",
        targetEl: "#styled-pf-esi-lwf",
    },
    {
        id: 5,
        label: "Bank",
        key: "bank",
        icon: "bi bi-bank",
        tabElementId: "5",
		triggerTabsId: "bank-styled-tab",
        triggerEl: "#bank-styled-tab",
        targetEl: "#styled-bank",
    },
    {
        id: 6,
        label: "Education",
        key: "educational",
        tabElementId: "6",
        icon: "bi bi-backpack2",
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
        icon: "bi bi-gear-wide-connected",
        tabElementId: "1",
		triggerTabsId: "business_setting-tab",
        triggerEl: "#business_setting-tab",
        targetEl: "#business_setting",
    },
    {
        id: 2,
        label: "Roles and Permissions",
        key: "roles_and_permissions",
        icon: "bi bi-person-lock",
        tabElementId: "2",
		triggerTabsId: "roles_and_permission-tab",
        triggerEl: "#roles_and_permission-tab",
        targetEl: "#roles_and_permission",
    },
    {
        id: 3,
        label: "Department",
        key: "department",
        icon: "bi bi-building-fill",
        tabElementId: "3",
		triggerTabsId: "department-list-tab",
        triggerEl: "#department-list-tab",
        targetEl: "#department-list",
    },
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