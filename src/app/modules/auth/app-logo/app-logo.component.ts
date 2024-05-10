import { Component, Injector, OnInit } from "@angular/core";
import { BaseComponent } from "../../../shared/base-component";

@Component({
    selector: "app-logo",
    templateUrl: "./app-logo.component.html",
    styleUrls: ["./app-logo.component.scss"],
})
export class AppLogoComponent extends BaseComponent implements OnInit {
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {}
}
