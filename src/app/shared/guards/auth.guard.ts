import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { DASHBOARD } from "../constants/constant";
import { AuthenticationService } from "../services/authentication.service";
import { StorageService } from "../services/storage.service";

export const AuthGuard: CanActivateFn = (route, state) => {
    const url: string = state.url;
    const authService = inject(AuthenticationService);
    const storageService = inject(StorageService);
    const router = inject(Router);

    const isLoggedIn = storageService.loggedIn();
    const isLoggedInPage = route.routeConfig?.path === "login";

    if (isLoggedIn && isLoggedInPage) {
        router.navigate([DASHBOARD]);
        return false;
    }

    if (!isLoggedIn && !isLoggedInPage) {
        authService.redirectUrl = url;
        router.navigate(["/auth/login"]);
        return false;
    }

    return true;
};

