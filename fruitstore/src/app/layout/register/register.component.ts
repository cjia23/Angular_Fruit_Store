import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MatDialog} from '@angular/material'
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  message: String;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  

  constructor(private formBuilder: FormBuilder,
              private authservice: AuthService,
              private _router: Router) { 
    
  }

  ngOnInit() {
    
  }

  userForm = new FormGroup({
    email: this.email,
    username: this.username,
    password: this.password
  });

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getpasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('minlength') ? 'minimum length is 6' :
            '';
  }

  getusernameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' :
        this.username.hasError('minlength') ? 'minimum length is 5' :
            '';
  }

  registerNewUser(){
     console.log(this.userForm.value)

     if (this.userForm.valid){
      
       this.authservice.addAuser(this.userForm.value)
          .subscribe(
            data => {this.message = 'User created!', console.log(this.message)},
            error => {this.message = 'Error when adding user.', console.log(this.message)}
          )
     }
  }

  movetologin(){
    this._router.navigate(['../login'])
  }

}
