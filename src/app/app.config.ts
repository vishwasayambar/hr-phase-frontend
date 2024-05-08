import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideRouter } from '@angular/router';

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
      provideRouter(routes),
      provideHttpClient(withInterceptors([AuthInterceptor])),
    ]
};

export function AppConfigFactory(config: ConfigService) {
    return () => config.load();
}
