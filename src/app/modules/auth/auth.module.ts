import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlContainerComponent } from "../../shared/components/control-container/control-container.component";
import { AppLogoComponent } from "./app-logo/app-logo.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";


@NgModule({
	declarations: [
		AuthComponent,
		LoginComponent,
		SignupComponent,
		AppLogoComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		ControlContainerComponent,
		ReactiveFormsModule,
	]
})
export class AuthModule {
}
