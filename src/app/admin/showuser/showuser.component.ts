import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

  constructor(private services:SharedService) { }
  Userlist:any=[];
  bd:any;

  ngOnInit(): void {
    this.refreshUserList();
  }
  refreshUserList(){
    this.services.getuser().subscribe(data=>{
        this.Userlist=data;
    });
}

}
