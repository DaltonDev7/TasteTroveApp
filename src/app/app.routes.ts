import { Routes } from '@angular/router';
import { RouteApp } from './core/enums/route-name.enum';
import { HomeComponent } from './pages/home/home.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: RouteApp.home,
        pathMatch : 'full'
    },
    {
        path:RouteApp.home,
        component: HomeComponent
    },
    {
        path:RouteApp.myProfile,
        component: MyProfileComponent
    }
];
