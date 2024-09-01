import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./user/routes').then(r => r.routes)
    },
    {
        path:'admin',
        loadChildren: () => import('./admin/routes').then(r => r.routes)
    }
];
