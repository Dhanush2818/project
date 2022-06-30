import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderdetailsService) { }

  BookData:any;

  ngOnInit(): void {
    this.BookData = this.service.BookDetails;
  }


}
