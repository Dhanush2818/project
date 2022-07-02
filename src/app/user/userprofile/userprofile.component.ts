import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserComponent } from '../user.component';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private services:SharedService,private componrnt:UserComponent) { }
  Detailslist:any=[];
  @Input() new:any;
  ngOnInit(): void {
    //console.log(this.new)
    this.refreshBookList();
    
  }
  refreshBookList(){
    this.services.getuserbyemail(this.new).subscribe(data=>{
        this.Detailslist=data;
        console.log(this.Detailslist)
    });
    
}

}
