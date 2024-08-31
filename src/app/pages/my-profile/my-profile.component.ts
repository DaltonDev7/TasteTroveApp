import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CardRecipeComponent } from '../../shared/components/card-recipe/card-recipe.component';
import { ButtonActionComponent } from '../../shared/components/button-action/button-action.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [NavbarComponent, CardRecipeComponent, CardModule, ButtonActionComponent, ButtonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

}
