import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { CardRecipeComponent } from '../../../../shared/components/card-recipe/card-recipe.component';
import { ButtonActionComponent } from '../../../../shared/components/button-action/button-action.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouteApp } from '../../../../core/enums/route-name.enum';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [NavbarComponent, CardRecipeComponent, CardModule, CommonModule, ButtonActionComponent, ButtonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

  constructor(private router: Router){}

  tabs = [
    { icon: 'fa-solid fa-bowl-food text-2xl cursor-pointer font-poppins transition ease-in delay-150 text-primary pb-2 font-semibold' },
    { icon: 'fa-solid fa-lock text-2xl cursor-pointer font-poppins transition ease-in delay-150 text-primary pb-2 font-semibold' },
    { icon: 'fa-solid fa-heart text-2xl cursor-pointer font-poppins transition ease-in delay-150 text-primary pb-2 font-semibold' },
  ];
  activeTabIndex = 0;

  selectTab(index: number): void {
    this.activeTabIndex = index;
  }

  public handleButtonClick(){
    this.router.navigate([RouteApp.editProfile])
  }
}
