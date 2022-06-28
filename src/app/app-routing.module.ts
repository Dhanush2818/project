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
import { AddeditbookComponent } from './modifybooks/addeditbook/addeditbook.component';
import {ShowbooksComponent} from './modifybooks/showbooks/showbooks.component';
import { AdduserComponent } from './signup/signup/adduser/adduser.component';
import { ShowuserComponent } from './admin/showuser/showuser.component';
import { ShowordersComponent } from './admin/showorders/showorders.component';
import { UserviewbooksComponent } from './user/userviewbooks/userviewbooks.component';
import { UsersearchbooksComponent } from './user/usersearchbooks/usersearchbooks.component';
import { UsercartComponent } from './user/usercart/usercart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'NavBar',component:NavBarComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Admin',component:AdminComponent},
  {path:'User',component:UserComponent},
  {path:'ContactPage',component:ContactpageComponent},
  {path:'Adminlogin',component:AdminloginComponent},
  {path:'Viewbooks',component:ViewBooksComponent},
  {path:'Searchbooks',component:SearchBooksComponent},
  {path:'Modify',component:ModifybooksComponent},
  {path:'Addedit',component:AddeditbooksComponent},
  {path:'AddEdit',component:AddeditbookComponent},
  {path:'ShowBook',component:ShowbooksComponent},
  {path:'AddUser',component:AdduserComponent},
  {path:'ShowUser',component:ShowuserComponent},
  {path:'ShowOrders',component:ShowordersComponent},
  {path:'Userbooks',component:UserviewbooksComponent},
  {path:'Usersearch',component:UsersearchbooksComponent},
  {path:'UserCart',component:UsercartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [NavBarComponent,LoginComponent,SignupComponent]
