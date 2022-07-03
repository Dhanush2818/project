import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service:SharedService,private route:Router) { }
  Adminlist:any=[];
  de:any;
  dp:any;
  ge:any;
  gp:any;
  k:any;
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
    this.service.getadminbyemail(this.ge).subscribe(data=>{
      this.Adminlist=data;
      console.log(this.Adminlist);
    
    for(let m of this.Adminlist)
    {
      this.de=m.AdminEmail;
      this.dp=m.Password;
      this.k=m;
    }
    console.log(this.ge,this.de,this.dp,this.gp)
    if((this.de==this.ge)&&(this.dp==this.gp))
    {
      this.route.navigate(['/Admin']);
      
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


