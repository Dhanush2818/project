import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewBooksComponent } from './viewbooks/view-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ModifybooksComponent } from './modifybooks/modifybooks.component';
import { AddeditbooksComponent } from './addeditbooks/addeditbooks.component';
const routes: Routes = [
  {path:'NavBar',component:NavBarComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Home',component:HomeComponent},
  {path:'Admin',component:AdminComponent},
  {path:'User',component:UserComponent},
  {path:'ContactPage',component:ContactpageComponent},
  {path:'Adminlogin',component:AdminloginComponent},
  {path:'Viewbooks',component:ViewBooksComponent},
  {path:'Searchbooks',component:SearchBooksComponent},
  {path:'Modify',component:ModifybooksComponent},
  {path:'Addedit',component:AddeditbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [NavBarComponent,LoginComponent,SignupComponent]
