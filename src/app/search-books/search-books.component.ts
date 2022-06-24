import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  constructor(private service:SharedService) { }
  bookslist:any=[];
  ngOnInit(): void {
    this.refreshBookList();
  }
 refreshBookList(){
  this.service.getbooks().subscribe(data=>{
      this.bookslist=data;
  });
 }
}
