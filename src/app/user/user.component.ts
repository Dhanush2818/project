import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private rtr:Router,private servic:SharedService) { }

  BookData:any;
  id:any;
@Input() details:any;

  ngOnInit(): void {
    this.servic.getbooks().subscribe(data=>{
      this.BookData=data;});
    this.route.paramMap.subscribe((params)=>{
      this.id=params.get('id');
    });
    console.log('hello'+this.id)
   
  }
  gopage(){
    console.log(this.id)
    this.rtr.navigate(['Userbooks',this.id]);
  }
  gocart(){
    console.log(this.id)
    this.rtr.navigate(['UserCart',this.id]);
  }

}