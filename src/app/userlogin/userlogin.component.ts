import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

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
  id:any;
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

}
