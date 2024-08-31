import { Routes } from '@angular/router';
import { RouteApp } from './core/enums/route-name.enum';
import { BaseHomeComponent } from './shared/components/base-home/base-home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     redirectTo: RouteApp.home,
    //     pathMatch: 'prefix'
    // },
    {
        path:'',
        component: BaseHomeComponent,
        loadChildren: () => import('./pages/home/home.routing').then(r => r.routes)
    },
    {
        path:RouteApp.signIn,
        component: SignInComponent,
    },
    {
        path:RouteApp.signUp,
        component: SignUpComponent
    }
];
