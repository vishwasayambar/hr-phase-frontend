import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-user-popover',
  standalone: true,
  imports: [],
  templateUrl: './user-popover.component.html',
  styleUrl: './user-popover.component.scss'
})
export class UserPopoverComponent {
  @Input() id: string;

}
