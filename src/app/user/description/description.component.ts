import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private services:SharedService) { }
  Booklist:any=[];
  bd=222;

  ngOnInit(): void {
    this.refreshBookList();
  }
  refreshBookList(){
    this.services.getbooksbyid(this.bd).subscribe(data=>{
        this.Booklist=data;
    });
}

}
