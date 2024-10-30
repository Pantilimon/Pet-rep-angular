import { Route } from '@angular/router';

import { authGuard } from '@arm-lnp/auth/api';
import { AnotherGuard } from '@arm-lnp/auth/api';
import { RootPagesComponent } from '@arm-lnp/root/shell';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'trips' },
    {
        path: 'login',
        loadChildren: () => import('@arm-lnp/auth/shell').then((m) => m.AuthShellModule)
    },
    {
        path: '',
        component: RootPagesComponent,
        canActivateChild: [authGuard],
        children: [
            // { path: '', pathMatch: 'full', redirectTo: 'trips' },
            {
                path: 'trips',
                loadChildren: () => import('@arm-lnp/trips/shell').then((m) => m.TripsShellModule)
            }
        ]
    }
];
