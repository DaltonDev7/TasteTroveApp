import { Component } from '@angular/core';
import { ButtonActionComponent } from '../shared/components/button-action/button-action.component';
import { RouterOutlet } from '@angular/router';
import { CardRecipeComponent } from '../shared/components/card-recipe/card-recipe.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonActionComponent, RouterOutlet, CardRecipeComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
