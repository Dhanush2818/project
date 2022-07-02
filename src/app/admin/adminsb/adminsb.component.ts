import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-adminsb',
  templateUrl: './adminsb.component.html',
  styleUrls: ['./adminsb.component.css']
})
export class AdminsbComponent implements OnInit {
  constructor(private services:SharedService) { }
  Booklist:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  bd:any;
  
  BookNameSearch:string="";
  BookPriceSearch:number=0;
  BookListWithoutSearch:any=[];
  ngOnInit(): void {
    this.refreshBookList();
  }
  refreshBookList(){
    this.services.getbooks().subscribe(data=>{
        this.Booklist=data;
        this.BookListWithoutSearch=data;
    });
}
  SearchFn(){
    var BookNameSearch=this.BookNameSearch;
    
    this.Booklist = this.BookListWithoutSearch.filter(function (el:any){
      return el.BookName.toString().toLowerCase().includes(
        BookNameSearch.toString().trim().toLowerCase()
      )
  });
  }
}