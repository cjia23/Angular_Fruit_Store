import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/layout/auth/login/login.component';
import { MainDeskComponent } from 'src/app/layout/auth/main-desk/main-desk.component';
import { RegisterComponent } from 'src/app/layout/auth/register/register.component';
import { UserDashboardComponent } from 'src/app/layout/auth/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: MainDeskComponent, children:
    [
        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]
  },
  {path: 'dash' , component: UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
