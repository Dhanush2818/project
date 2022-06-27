import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-addeditbooks',
  templateUrl: './addeditbooks.component.html',
  styleUrls: ['./addeditbooks.component.css']
})
export class AddeditbooksComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  
  ngOnInit(): void {
  }

}
