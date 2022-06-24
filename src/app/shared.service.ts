import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:53821/api";
  readonly PhotoUrl="http://localhost:53821/Photos";

  constructor(private http:HttpClient) { }
  getbooks():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/BookDetails');
  }
  addbooks(val:any){
    return this.http.post(this.APIUrl+'/BookDetails',val);
  }
  updatebooks(val:any){
    return this.http.put(this.APIUrl+'/BookDetails',val);
  }
  deletebooks(val:any){
    return this.http.delete(this.APIUrl+'/BookDetails',val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/BookDetails/SaveFile',val);
  }

}
