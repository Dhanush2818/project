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
  ActivateAddEditEmpComp:boolean=false;
  bd:any;
  
  
  ngOnInit(): void {
    this.refreshBookList();
  }
  refreshBookList(){
    this.services.getbooks().subscribe(data=>{
        this.Booklist=data;
    });
}
}
