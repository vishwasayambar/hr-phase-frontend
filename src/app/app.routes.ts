import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: "auth",
		loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
		title: "HrPhase Authentication",
	},
	{
		path: "dashboard",
		loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule),
		title: "HrPhase Authentication",
	},
	{
		path: "",
		redirectTo: "/auth/login",
		pathMatch: "full",
	},
	// { path: "**", redirectTo: "/errors/404" },
];
