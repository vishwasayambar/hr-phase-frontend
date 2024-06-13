import { Component, Input } from "@angular/core";
import { ReactiveFormsModule, UntypedFormGroup } from "@angular/forms";
import { ControlContainerComponent } from "../control-container/control-container.component";

@Component({
	selector: "app-user-notification-channel",
	standalone: true,
	imports: [
		ReactiveFormsModule,
		ControlContainerComponent
	],
	templateUrl: "./user-notification-channel.component.html",
})
export class UserNotificationChannelComponent {
	@Input() label = "Send Alert";
	@Input() form: UntypedFormGroup;
}
