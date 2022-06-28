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
  
  
  ngOnInit(): void {
    this.refreshBookList();
  }
  addClick(){
    this.bd={
      BookName:"",
            BookId:0,
            Gerner:"",
            Language:"",
            Price:0,
            Photo:""
     
    }
    this.ModalTitle="BookDescription";

  }
  closeClick(){
    this.refreshBookList();
  }

  refreshBookList(){
    this.services.getbooks().subscribe(data=>{
        this.Booklist=data;
    });
}
}
