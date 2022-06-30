import { Component, OnInit,Input } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:OrderdetailsService) { }

  BookData:any;
@Input() details:any;

  ngOnInit(): void {
    this.BookData = this.service.BookDetails;
  }

}
