import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addeditbook',
  templateUrl: './addeditbook.component.html',
  styleUrls: ['./addeditbook.component.css']
})
export class AddeditbookComponent implements OnInit {

  constructor(private services:SharedService) { }
  Booklist:any=[];
 
  @Input() bd:any;
  BookName:string | undefined;
            BookId:Int16Array | undefined;
            Gerner:string | undefined;
            Author:string | undefined;
            Language:string | undefined;
            Description:string | undefined;
            Price:Int16Array | undefined;
            Photo:string | undefined;
           
  

  BookList:any=[];

  ngOnInit(): void {this.BookName=this.bd.BookName;
    this.BookId=this.bd.BookId;
    this.Gerner=this.bd.Gerner;
    this.Author=this.bd.Author;
    this.Language=this.bd.Language;
    this.Description=this.bd.Description;
    this.Price=this.bd.Price;
    this.Photo=this.bd.Photo;
    
  }
  

 

  addBookList(){
    var val ={BookName:this.BookName,
      BookId:this.BookId,
    Gerner:this.Gerner,
    Author:this.Author,
  Language:this.Language,
  Description:this.Description,
Price:this.Price,
Photo:this.Photo};
    

    this.services.addbooks(val).subscribe(res=>{
        alert(res.toString());
    });
  }


  updateBook(){
    var val ={BookName:this.BookName,
      BookId:this.BookId,
    Gerner:this.Gerner,
    Author:this.Author,
  Language:this.Language,
  Description:this.Description,
Price:this.Price,
Photo:this.Photo};

    this.services.updatebooks(val).subscribe(res=>{
    alert(res.toString());
    });
  }




}


