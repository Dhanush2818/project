import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'NavBar',component:NavBarComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [NavBarComponent,LoginComponent,SignupComponent]
