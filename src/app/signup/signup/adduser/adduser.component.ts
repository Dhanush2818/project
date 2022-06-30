import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private services:SharedService) { }
  Userlist:any=[];
  @Input() bd:any;
  UserName:string | undefined;
            
            UserEmail:string | undefined;
            Contact:string | undefined;
            Address:string | undefined;
            Password:string | undefined;
            UserId:Int16Array | undefined;
            UserList:any=[];
            ngOnInit(): void {this.UserName=this.bd.UserName;
              this.UserEmail=this.bd.UserEmail;
              this.Contact!=this.bd.Contact;
              this.Address!=this.bd.Address;
              this.Password!=this.bd.Password;
              this.UserId!=this.bd.UserId;
             
              
            }
            addUserList(){
              var val ={UserName:this.UserName,
                UserEmail:this.UserEmail,
                Contact:this.Contact,
                Address:this.Address,
                Password:this.Password,
                UserId:this.UserId};
              console.log(val)
          
              this.services.adduser(val).subscribe(res=>{
                  alert(res.toString());
              });
            }
            

}
