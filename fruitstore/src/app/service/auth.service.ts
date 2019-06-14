import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {}
  
  getUserlist(){
     let new_url = url + '/user';
     
     return this._http.get(new_url)
  }

  //post request to register a new user
  addAuser(body: any){
     let new_url = url + '/user';
     
     return this._http.post(new_url,body)
     }

   deleteanUser(user: any){
      let new_url = url + '/user' + `/${user._id}`;
      
      return this._http.delete(new_url)
   }
  }
