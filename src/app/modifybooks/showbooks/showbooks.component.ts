import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.css']
})
export class ShowbooksComponent implements OnInit {
 
  constructor(private services:SharedService) {
    
   }
  Booklist:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  bd:any;
  
  
  ngOnInit(): void {
    this.refreshBookList();
  }
  addClick(){
    this.bd={
      BookName:"",
            BookId:0,
            Gerner:"",
            Language:"",
            Price:0,
            Photo:""
     
    }
    this.ModalTitle="Add Book";
    this.ActivateAddEditEmpComp=true;

  }
  editClick(item: any){
    console.log(item);
    this.bd=item;
    this.ModalTitle="Edit Book";
    this.ActivateAddEditEmpComp=true;
  }
  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.services.deletebooks(item.BookId).subscribe(data=>{
        alert(data.toString());
        this.refreshBookList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshBookList();
  }

  refreshBookList(){
    this.services.getbooks().subscribe(data=>{
        this.Booklist=data;
    });
}
}
