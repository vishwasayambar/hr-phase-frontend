import { Component, input } from "@angular/core";

@Component({
	selector: "app-error",
	standalone: true,
	imports: [],
	templateUrl: "./error.component.html",
	styleUrl: "./error.component.scss"
})
export class ErrorComponent {

	errorMsg =  input<string>();
	displayError = input<boolean>();
}
