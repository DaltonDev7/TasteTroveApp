import { Component } from '@angular/core';
import { ButtonActionComponent } from '../../../../shared/components/button-action/button-action.component';


@Component({
  selector: 'app-find-friend',
  standalone: true,
  imports: [ButtonActionComponent],
  templateUrl: './find-friend.component.html',
  styleUrl: './find-friend.component.scss'
})
export class FindFriendComponent {

}
