import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { StorageService } from "../services/storage.service";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(StorageService).getToken();
  if (authToken) {
    const newRequest = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + authToken)
    });
    return next(newRequest);
  }
  return next(req);
};
