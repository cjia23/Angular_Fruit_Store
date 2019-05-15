import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';
import { MatDialog} from '@angular/material'
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private formBuilder: FormBuilder,
              private _router: Router,
              private _activatedroute: ActivatedRoute) { }

  ngOnInit(){
    
  }
  
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

  movetoregister(){
      this._router.navigate(['../register'])
  }

  
  
}
