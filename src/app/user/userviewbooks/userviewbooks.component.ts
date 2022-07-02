import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-userviewbooks',
  templateUrl: './userviewbooks.component.html',
  styleUrls: ['./userviewbooks.component.css']
})
export class UserviewbooksComponent implements OnInit {

  constructor(private services:SharedService) { }
  Booklist:any=[];
  ModalTitle:string | undefined;
  bd:any;
  n:any;
  
  ngOnInit(): void {
    this.refreshBookList();
  }
  addClick(val:any){
    
    this.ModalTitle="BookDescription"
  this.n=val
  }
  closeClick(){
    this.refreshBookList();
  }

  refreshBookList(){
    this.services.getbooks().subscribe(data=>{
        this.Booklist=data;
    });
    
    console.log(this.Booklist);
}
}
