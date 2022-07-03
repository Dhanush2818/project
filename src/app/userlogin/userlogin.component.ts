import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private service:SharedService,private route:Router) { }
  Userlist:any=[];
  de:any;
  dp:any;
  ge:any;
  gp:any;
  k:any;
  id:any;
  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    Password: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
     
    ]),


    UserEmail: new FormControl("",[
      Validators.required,
      Validators.email
    ])
  });
  registerSubmited(){
    this.ge=this.registerForm.value.UserEmail;
    this.gp=this.registerForm.value.Password;
    console.log(this.ge);
    this.service.getuserbyemail(this.ge).subscribe(data=>{
      this.Userlist=data;
      
     
      for(let m of this.Userlist)
      {
        this.de=m.UserEmail;
        this.dp=m.Password;
        this.k=m;
      }
      if((this.de==this.ge)&&(this.dp==this.gp)&&(this.de!=null)&&(this.ge!=null))
      {
        this.id=this.k.UserEmail;
        this.route.navigate(['User',this.id]);
        
      }
      else{
        alert("Incorrect Credentials")
      }
    });
    
  }
  
  get password(): FormControl{
    return this.registerForm.get('Password') as FormControl;
  }
  get useremail(): FormControl{
    return this.registerForm.get('UserEmail') as FormControl;
  }

}
