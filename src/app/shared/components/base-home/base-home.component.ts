import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-home',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './base-home.component.html',
  styleUrl: './base-home.component.scss'
})
export class BaseHomeComponent {

}
