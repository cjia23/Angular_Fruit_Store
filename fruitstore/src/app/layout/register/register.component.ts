import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';


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
    
    this.authservice.getUserlist()
        .subscribe(data => {this.userlist = data})
        
  }

  userForm = new FormGroup({
    email: this.email,
    username: this.username,
    password: this.password
  })

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
            data => console.log(data))
     }
  }

  movetologin(){
    this._router.navigate(['../login'])
  }
  
  //userlist
  userlist;
  displayedColumns: string[] = ['username', 'email', 'password','isUser','isAdmin','manage'];

  deleteanUser(user: any): void{
    this.userlist = this.userlist.filter(h => h !== user);
    this.authservice.deleteanUser(user)
      .subscribe(data => console.log(data))
    console.log("delete request sent")
    
  }
}
