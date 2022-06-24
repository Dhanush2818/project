import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-modifybooks',
  templateUrl: './modifybooks.component.html',
  styleUrls: ['./modifybooks.component.css']
})
export class ModifybooksComponent implements OnInit {

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
