import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-userviewbooks',
  templateUrl: './userviewbooks.component.html',
  styleUrls: ['./userviewbooks.component.css']
})
export class UserviewbooksComponent implements OnInit {

  constructor(private services:SharedService,private router:ActivatedRoute) { }
  BookNameSearch:string="";
  BookAuthorSearch:string="";
  BookListWithoutSearch:any=[];
  Booklist:any=[];
  UserList:any=[];
  ModalTitle:string | undefined;
  bd:any;
  n:any;
  bn:any;
  bp:any;
  bq=1;
  ue:any;
  ui:any;
  ua:any;
  id:any;
  ngOnInit(): void {
    this.refreshBookList();
    // console.log(this.comp.id);
    this.router.paramMap.subscribe((params)=>{
      this.id=params.get('id');
    });
    console.log(this.id);
  }
  addClick(val:any){
    
    this.ModalTitle="BookDescription"
  this.n=val
  console.log(this.n)
  }
  closeClick(){
    this.refreshBookList();
  }

  refreshBookList(){
    this.services.getbooks().subscribe(data=>{
        this.Booklist=data;
    });

    
    
}
SearchFn(){
  var BookNameSearch=this.BookNameSearch;
  var BookAuthorSearch=this.BookAuthorSearch;
  this.Booklist = this.BookListWithoutSearch.filter(function (el:any){
    return el.BookName.toString().toLowerCase().includes(
      BookNameSearch.toString().trim().toLowerCase()
    )&& el.Author.toString().toLowerCase().includes(
      BookNameSearch.toString().trim().toLowerCase()
    )
});
}
addcart(val:any){
  
  
  this.services.getuserbyemail(this.id).subscribe(data=>{
    this.UserList=data;
    console.log(this.UserList)
    for(let m of this.UserList)
    {
      this.ue=m.UserEmail;
      this.ui=m.UserId;
      this.ua=m.Address;
    }
    this.services.addorder(
      {
        UserEmail:this.ue,
        UserId:this.ui,
        BookName:val.BookName,
        Price:val.Price,
        Quantity:this.bq,
        Address:this.ua
      }
    ).subscribe(res=>{
      alert(res.toString());
    
});
});

}
}

