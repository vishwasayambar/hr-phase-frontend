import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        // canActivate: [AuthGuard],
        title: "HrPhase Login",
      },
      {
        path: "signup",
        component: SignupComponent,
        // canActivate: [BeforeLoginGuard],
        title: "HrPhase SignUp",
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
export class AuthRoutingModule { }
