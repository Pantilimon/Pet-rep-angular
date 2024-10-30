import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthFacade } from '@arm-lnp/auth/domain';

export const authGuard: CanActivateFn = (_route, state) => {
    const authFacade = inject(AuthFacade);
    const router = inject(Router);

    const user = authFacade.getCurrentUser();

    if (!user()) {
        // router.navigate(['/login'], {
        //     queryParamsHandling: 'merge',
        //     queryParams: {
        //         redirectLoggedInTo: state.url
        //     }
        // });

        return false;
    }

    return true;
};
