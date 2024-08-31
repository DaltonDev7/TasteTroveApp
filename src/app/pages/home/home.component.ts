import { Component } from '@angular/core';
import { CardRecipeComponent } from "../../shared/components/card-recipe/card-recipe.component";
import { ButtonActionComponent } from '../../shared/components/button-action/button-action.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardRecipeComponent, ButtonActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
