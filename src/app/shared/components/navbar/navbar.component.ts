import { Component, OnInit } from '@angular/core';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { MenuOptions } from '../../../core/interfaces/menu-optiones';
import { MENU_OPTIONS } from '../../../core/constants/menu';
import { log } from 'console';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonActionComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  menuOptions:MenuOptions[] = MENU_OPTIONS

  constructor(private router : Router){}

  ngOnInit(): void {
    console.log(this.menuOptions);
  }

  public navigate(path:string){
    this.router.navigate([path])
  }

}
