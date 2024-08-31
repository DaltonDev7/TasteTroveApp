import { Component } from '@angular/core';
import { ButtonActionComponent } from '../../shared/components/button-action/button-action.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [ButtonActionComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

}
