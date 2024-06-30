import {NgClass} from "@angular/common";
import {Component, Injector, OnInit} from "@angular/core";
import {BaseComponent} from "../../base-component";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        NgClass,
        RouterLink
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent extends BaseComponent implements OnInit {
    menus: ({
        title: string;
        id: string;
        icon: string;
        active: boolean;
        type: string;
        link: string;
        visible: any;
        submenus?: undefined;
    } | {
        title: string;
        id: string;
        icon: string;
        active: boolean;
        type: string;
        visible: any;
        submenus: { title: string; id: string; link: string; icon: string; visible: boolean; }[];
        link?: undefined;
    })[] = [];

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.menus = this.menus = [
            {
                title: "Dashboard",
                id: "sidebarDashboard",
                icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
                active: false,
                type: "simple",
                link: "/dashboards",
                visible: true,
            },
            {
                title: "Employees",
                id: "sidebarEmployees",
                icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
                active: false,
                type: "simple",
                link: "/employees",
                visible: true, // this.userPermissionList.includes(this.PERMISSION_LIST.EMPLOYEE_LIST),
            },
        ];
    }
}
