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
    selectedMenuLink: string | null = `/${window.location.href.toLocaleLowerCase().split('/')[3]}`;
    
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
                icon: "bi bi-speedometer2",
                active: false,
                type: "simple",
                link: "/dashboards",
                visible: true,
            },
            {
                title: "Employees",
                id: "sidebarEmployees",
                icon: "bi bi-people",
                active: false,
                type: "simple",
                link: "/employees",
                visible: true, // this.userPermissionList.includes(this.PERMISSION_LIST.EMPLOYEE_LIST),
            },
        ];
    }
    
    selectMenu(menuId: string): void {
        this.selectedMenuLink = menuId;
    }
}
