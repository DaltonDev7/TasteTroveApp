import { Component } from '@angular/core';
import { ButtonActionComponent } from '../../shared/components/button-action/button-action.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ButtonActionComponent, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
