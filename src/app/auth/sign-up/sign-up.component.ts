import { Component, OnInit } from '@angular/core';
import { ButtonActionComponent } from "../../shared/components/button-action/button-action.component";
import { RouterModule } from '@angular/router';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ButtonActionComponent, RouterModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  selectedCar!: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

    userForm!: FormGroup

    constructor(private fb: FormBuilder, private userServices: UserService){}
  
    ngOnInit(): void {
      this.userForm = this.fb.group({
        name:[null, [Validators.required]],
        lastname:[null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.email]],
        // gender: [null, [Validators.required]]
      })
    }
  
    public async registerUser(){
      this.userServices.registerUser(this.userForm.value).then(()=>{
        console.log('registradooo')
      })
    }
}
