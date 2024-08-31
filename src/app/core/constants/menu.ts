import { RouteApp } from "../enums/route-name.enum";
import { MenuOptions } from "../interfaces/menu-optiones";

export const MENU_OPTIONS: MenuOptions [] = [
    {
        path:RouteApp.home,
        label:'Inicio',
    },
    {
        path:RouteApp.recipe,
        label:'Recetas'
    },
    {
        path:RouteApp.findFriend,
        label:'Conectate'
    }
]