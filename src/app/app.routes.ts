import { Routes } from '@angular/router';
import { authGuard } from './features/home/guards/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: '/qadma/auth/signin', pathMatch: 'full'
    },
        {
        path: 'qadma', redirectTo: '/qadma/auth/signin', pathMatch: 'full'
    },
    {
        path: 'qadma',
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
            },
            {
                path: 'home',
                canActivate: [authGuard],
                loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
            }
        ]
    }
];
