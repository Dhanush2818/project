import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  constructor(private services:SharedService) { }
  Cartlist:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  @Input() bd=222;
 
  ngOnInit(): void {
    this.refreshBookList();
  }
  
  refreshBookList(){
    this.services.getorderbyid(this.bd).subscribe(data=>{
        this.Cartlist=data;
    });
}
  }
  


