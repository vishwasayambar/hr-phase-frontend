import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from '@angular/router';
import { provideToastr } from "ngx-toastr";
import { routes } from './app.routes';
import { AuthInterceptor } from "./shared/interceptor/auth.interceptor";
import { ConfigService } from "./shared/services/config.service";

export const appConfig: ApplicationConfig = {
  providers: [
      {
          provide: APP_INITIALIZER,
          useFactory: AppConfigFactory,
          deps: [ConfigService],
          multi: true,
      },
      provideAnimations(), // required animations providers
      provideToastr({
          timeOut: 1500,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
          easing: 'ease-in'
      }),
      provideRouter(routes),
      provideHttpClient(withInterceptors([AuthInterceptor])),
    ]
};

export function AppConfigFactory(config: ConfigService) {
    return () => config.load();
}
