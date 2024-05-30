import { Component, Injector } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from "./shared/base-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent  {
  title = 'hr-pahse-frontend';
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
