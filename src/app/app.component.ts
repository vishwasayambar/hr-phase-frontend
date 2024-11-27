import {NgClass} from "@angular/common";
import { Component, Injector, OnInit } from "@angular/core";
import { NavigationEnd, RouterOutlet } from '@angular/router';
import {initFlowbite} from "flowbite";
import {BaseComponent} from "./shared/base-component";
import {NavbarComponent} from "./shared/layouts/navbar/navbar.component";
import {SidebarComponent} from "./shared/layouts/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgClass, SidebarComponent, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent implements OnInit {
    title = 'hr-phase-frontend';

    constructor(injector: Injector) {
        super(injector);
        // TODO:: This will work direct when we add "initFlowbite();" but Modal is not working on router-outlet components therefor we need below code.
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                setTimeout(() => {  initFlowbite();})
            }
        });
    }

    ngOnInit(): void {
        initFlowbite();
        this.loadingService.isLoading$.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
}
