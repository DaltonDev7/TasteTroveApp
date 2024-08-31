import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { RouteApp } from "../../core/enums/route-name.enum";
import { FindFriendComponent } from "../find-friend/find-friend.component";
import { MyProfileComponent } from "../my-profile/my-profile.component";
import { RecipeComponent } from "../recipe/recipe.component";
import { RecipeDetailComponent } from "../recipe-detail/recipe-detail.component";

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