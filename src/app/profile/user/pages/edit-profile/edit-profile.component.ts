import { Component } from '@angular/core';
import { ButtonActionComponent } from '../../../../shared/components/button-action/button-action.component';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ButtonActionComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {


  public updateProfile(){
    console.log('asas')
  }

}
