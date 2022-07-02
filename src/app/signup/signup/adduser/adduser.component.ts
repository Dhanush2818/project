import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  repeatPass : string = 'none';
  displayMsg: string = '';
  isAccountCreated: boolean = false;


  constructor(private services:SharedService, private router:Router) { }
  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    UserName: new FormControl("",[
      Validators.required,
    Validators.minLength(4),
    Validators.pattern("[a-zA-Z].*")]),


    UserEmail: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    Contact: new FormControl("",[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]*')
    ]),
    Address: new FormControl("",[Validators.required]),
    Password: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
     
    ]),
  });

  registerSubmited(){
    

      this.services.adduser({
        UserName:this.registerForm.value.UserName,
        UserEmail:this.registerForm.value.UserEmail,
        Contact:this.registerForm.value.Contact,
        Address:this.registerForm.value.Address,
        Password:this.registerForm.value.Password
  }).subscribe(
        res =>{
          if (res == "Registration Successfull"){
            this.displayMsg = "Account Created Successfully";
            this.isAccountCreated = true;
          }
          else if (res == "Already Exists"){
            this.displayMsg = "Account Already Exist. Try another Email.";
            this.isAccountCreated = false;
          }
          else{
            this.displayMsg = "Something went wrong";
            this.isAccountCreated = false;
          }
          this.router.navigate(["/Userlogin"]);
        }
      );
    }
   
 

  get username(): FormControl{
    return this.registerForm.get('UserName') as FormControl;
  }
  get useremail(): FormControl{
    return this.registerForm.get('UserEmail') as FormControl;
  }
  get contact(): FormControl{
    return this.registerForm.get('Contact') as FormControl;
  }
  get address(): FormControl{
    return this.registerForm.get('Address') as FormControl;
  }
  get password(): FormControl{
    return this.registerForm.get('Password') as FormControl;
  }
}
