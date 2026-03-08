import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-user-popover',
    imports: [],
    templateUrl: './user-popover.component.html',
    styleUrl: './user-popover.component.scss'
})
export class UserPopoverComponent {
  @Input() id: string;

}
