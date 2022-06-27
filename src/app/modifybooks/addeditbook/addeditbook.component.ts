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
            Language:string | undefined;
            Price:Int16Array | undefined;
            Photo:string | undefined;
            PhotoFilePath:string | undefined;
  

  BookList:any=[];

  ngOnInit(): void {this.BookName=this.bd.BookName;
    this.BookId=this.bd.BookId;
    this.Gerner!=this.bd.Gerner;
    this.Language!=this.bd.Language;
    this.Price!=this.bd.Price;
    this.Photo!=this.bd.Photo;
    this.PhotoFilePath=this.services.PhotoUrl+this.Photo;
    
  }
  

 

  addBookList(){
    var val ={BookName:this.BookName,
      BookId:this.BookId,
    Gerner:this.Gerner,
  Language:this.Language,
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
  Language:this.Language,
Price:this.Price,
Photo:this.Photo};

    this.services.updatebooks(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto($event:any){
    var file=$event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.services.UploadPhoto(formData).subscribe((data:any)=>{
      this.Photo=data.toString;
      this.PhotoFilePath=this.services.PhotoUrl+this.Photo;


    })
  }

}

