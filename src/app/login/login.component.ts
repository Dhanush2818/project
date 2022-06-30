import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private services:SharedService,private route:Router) { }

  Userlist:any=[];
  UserList:any=[];
  @Input() bd:any;
  Email:string | undefined;
  pwd:string | undefined;
  de:any;
  dp:any;
  ge:any;
  gp:any;
  ra:any;
  k:any;
  ngOnInit(): void {this.Email=this.bd.Email;
    this.pwd=this.bd.pwd;
    
  }
  validate(){
    var val ={Email:this.Email,
      pwd:this.pwd,
    };
    this.Userlist=val;
    
    this.services.getuserbyemail(this.Email).subscribe(data=>{
      this.UserList=data;
      
     
      for(let m of this.UserList)
      {
        this.de=m.UserEmail;
        this.dp=m.Password;
        this.k=m;
      }
      
      this.ge=this.Userlist.Email;
      this.gp=this.Userlist.pwd;
      if((this.de==this.ge)&&(this.dp==this.gp))
      {
        this.route.navigate(['/User'],this.k);
        
      }
      else{
        alert("Incorrect Credentials")
      }
    });
    
  }
}
