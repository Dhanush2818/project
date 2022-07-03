import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SharedService) { }

  BookData:any;

  ngOnInit(): void { this.service.getbooks().subscribe(data=>{
    this.BookData=data;
});
  }


}
