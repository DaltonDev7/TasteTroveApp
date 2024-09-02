import { Component, OnInit } from '@angular/core';
import { ButtonActionComponent } from '../../shared/components/button-action/button-action.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ButtonActionComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  userForm!: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name:[null, [Validators.required]],
      lastname:[null, [Validators.required]],
      email: [null, [Validators.required]],
      gender: [null, [Validators.required]]
    })
  }

  public registerUser(){
    
  }

}
