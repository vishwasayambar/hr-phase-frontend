import {NgClass} from "@angular/common";
import {Component, Injector} from "@angular/core";
import {RouterOutlet} from '@angular/router';
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
export class AppComponent extends BaseComponent {
    title = 'hr-phase-frontend';

    constructor(injector: Injector) {
        super(injector);
        initFlowbite();
    }

    ngOnInit(): void {
        this.loadingService.isLoading$.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
}
