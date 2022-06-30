import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:OrderdetailsService) { }

  
  BookData:any;

  ngOnInit(): void {
    this.BookData = this.service.BookDetails;
  }
}
