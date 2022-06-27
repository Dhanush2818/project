import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-showorders',
  templateUrl: './showorders.component.html',
  styleUrls: ['./showorders.component.css']
})
export class ShowordersComponent implements OnInit {

  constructor(private services:SharedService) { }
  Orderlist:any=[];
  bd:any;

  ngOnInit(): void {
    this.refreshorderList();
  }
  refreshorderList(){
    this.services.getorder().subscribe(data=>{
        this.Orderlist=data;
    });
}


}
