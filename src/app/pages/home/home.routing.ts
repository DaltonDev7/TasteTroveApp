import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { RouteApp } from "../../core/enums/route-name.enum";

import { MyProfileComponent } from "../../profile/user/pages/my-profile/my-profile.component";
import { RecipeComponent } from "../../profile/user/pages/recipe/recipe.component";
import { RecipeDetailComponent } from "../../profile/user/pages/recipe-detail/recipe-detail.component";
import { FindFriendComponent } from "../../profile/user/pages/find-friend/find-friend.component";

export const routes: Routes = [
      {
        path:'',
        redirectTo: RouteApp.home,
        pathMatch: 'prefix'
    },
    {
        path: RouteApp.home,
        component: HomeComponent
    },
    {
        path:RouteApp.myProfile,
        component: MyProfileComponent
    },
    {
        path: RouteApp.findFriend,
        component: FindFriendComponent
    },
    {
        path: RouteApp.recipe,
        component : RecipeComponent
    },
    {
        path: RouteApp.recipeDetail,
        component : RecipeDetailComponent
    }
]