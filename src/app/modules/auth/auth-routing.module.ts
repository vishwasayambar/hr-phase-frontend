import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../shared/guards/auth.guard";
import { AccountActivateComponent } from "./account-activate/account-activate.component";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
	{
		path: "",
		component: AuthComponent,
		children: [
			{
				path: "login",
				component: LoginComponent,
				canActivate: [AuthGuard],
				title: "HrPhase Login",
			},
			{
				path: "signup",
				component: SignupComponent,
				// canActivate: [BeforeLoginGuard],
				title: "HrPhase SignUp",
			},
			{
				path: "accountActivate/:activation_code",
				component: AccountActivateComponent,
				// canActivate: [BeforeLoginGuard],
				title: "HrPhase Account Activation",
			},
			{
				path: "",
				redirectTo: "/auth/login",
				pathMatch: "full",
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {
}
