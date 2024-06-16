import { Component, Injector } from "@angular/core";
import { BaseComponent } from "../../shared/base-component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }
}
