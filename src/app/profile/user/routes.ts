import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { RouteApp } from '../../core/enums/route-name.enum';
import { ProfileComponent } from '../profile.component';

import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FindFriendComponent } from './pages/find-friend/find-friend.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: RouteApp.home,
        pathMatch: 'prefix',
    },
    {
        path:RouteApp.home,
        component: HomeComponent,
    },
    {
        path:RouteApp.findFriend,
        component: FindFriendComponent
    },
    {
        path:RouteApp.myProfile,
        component: MyProfileComponent
    },
    {
        path:RouteApp.editProfile,
        component:EditProfileComponent
    },
    {
        path:RouteApp.recipeDetail,
        component:RecipeDetailComponent
    }

    
];
