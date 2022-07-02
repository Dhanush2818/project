import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  constructor(private services:SharedService,private router:ActivatedRoute) { }
  Cartlist:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  bd:any;
 
  ngOnInit(): void {
    
    this.refreshBookList();
  }
  
  refreshBookList(){
    this.router.paramMap.subscribe((params)=>{
      this.bd=params.get('id');
    console.log(this.bd)
    this.services.getorderbyid(this.bd).subscribe(data=>{
        this.Cartlist=data;
        console.log(this.Cartlist)
    });
  });
}
  }
  


