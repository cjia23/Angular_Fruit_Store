import { Userstatus } from './../../model/userstatus';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  status = new Userstatus();

  getUserstatus(){
      this.status.username
  }
  

}
