import { Routes } from '@angular/router';
import { AuthGuard } from "./shared/guards/auth.guard";

export const routes: Routes = [
	{
		path: "auth",
		loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
		title: "HrPhase Authentication",
	},
	{
		path: "accounts",
		loadChildren: () => import("./modules/account/account.module").then(m => m.AccountModule),
		canActivate: [AuthGuard],
		title: "HrPhase Account",
	},
	{
		path: "dashboards",
		loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule),
		canActivate: [AuthGuard],
		title: "HrPhase Dashboard",
	},
	{
		path: "employees",
		loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule),
		canActivate: [AuthGuard],
		title: "HrPhase Employees",
	},
	{
		path: "",
		redirectTo: "/auth/login",
		pathMatch: "full",
	},
	// { path: "**", redirectTo: "/errors/404" },
];
