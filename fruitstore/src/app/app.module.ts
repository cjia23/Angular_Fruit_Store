import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './layout/auth/login/login.component';
import { MainDeskComponent } from './layout/auth/main-desk/main-desk.component';
import { RegisterComponent } from './layout/auth/register/register.component';
import { UserDashboardComponent } from './layout/auth/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainDeskComponent,
    RegisterComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
