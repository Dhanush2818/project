import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ViewBooksComponent } from './viewbooks/view-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ModifybooksComponent } from './modifybooks/modifybooks.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddeditbooksComponent } from './addeditbooks/addeditbooks.component';
import { ShowbooksComponent } from './modifybooks/showbooks/showbooks.component';
import { AddeditbookComponent } from './modifybooks/addeditbook/addeditbook.component';
import { AdduserComponent } from './signup/signup/adduser/adduser.component';
import { ShowuserComponent } from './admin/showuser/showuser.component';
import { ShowordersComponent } from './admin/showorders/showorders.component';
import { UserviewbooksComponent } from './user/userviewbooks/userviewbooks.component';
import { UsersearchbooksComponent } from './user/usersearchbooks/usersearchbooks.component';
import { UsercartComponent } from './user/usercart/usercart.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { DescriptionComponent } from './user/description/description.component';
import { UserloginComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    HomeComponent,
    AdminComponent,
    UserComponent,
    AdminloginComponent,
    ContactpageComponent,
    ViewBooksComponent,
    SearchBooksComponent,
    ModifybooksComponent,
    AddeditbooksComponent,
    ShowbooksComponent,
    AddeditbookComponent,
    AdduserComponent,
    ShowuserComponent,
    ShowordersComponent,
    UserviewbooksComponent,
    UsersearchbooksComponent,
    UsercartComponent,
    UserprofileComponent,
    DescriptionComponent,
    UserloginComponent
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SlickCarouselModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
