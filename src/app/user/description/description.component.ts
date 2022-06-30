import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserviewbooksComponent } from '../userviewbooks/userviewbooks.component';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private services:SharedService,private componrnt:UserviewbooksComponent ) { }
  Booklist:any=[];
  @Input() new:any;

  ngOnInit(): void {
    this.refreshBookList();
    
  }
  refreshBookList(){
    this.services.getbooksbyid(this.new).subscribe(data=>{
        this.Booklist=data;
    });
}

}
