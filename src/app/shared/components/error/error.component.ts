import { Component, input } from "@angular/core";

@Component({
    selector: "app-error",
    imports: [],
    templateUrl: "./error.component.html"
})
export class ErrorComponent {

	errorMsg =  input<string>();
	displayError = input<boolean>();
}
