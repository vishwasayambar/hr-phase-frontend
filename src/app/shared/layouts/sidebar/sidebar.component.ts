import { NgClass } from "@angular/common";
import { Component, Injector } from "@angular/core";
import { BaseComponent } from "../../base-component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }
}
