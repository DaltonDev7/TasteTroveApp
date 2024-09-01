import { Routes } from '@angular/router';
import { RouteApp } from './core/enums/route-name.enum';
import { BaseHomeComponent } from './shared/components/base-home/base-home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProfileSelectionComponent } from './profile-selection/profile-selection.component';

export const routes: Routes = [
    {
        path:'',
        component: BaseHomeComponent,
        loadChildren: () => import('./profile/routes').then(r => r.routes)
    },
    {
        path:RouteApp.signIn,
        component: SignInComponent,
    },
    {
        path:RouteApp.signUp,
        component: SignUpComponent
    },
    {
        path:RouteApp.selectProfile,
        component : ProfileSelectionComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
];
