import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
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
