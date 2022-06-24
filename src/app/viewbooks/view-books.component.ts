import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

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
