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
    return this.http.delete(this.APIUrl+'/BookDetails'+'/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/BookDetails/SaveFile',val);
  }
  adduser(val:any){
    return this.http.post(this.APIUrl+'/UserDetails',val);
  }
  updateuser(val:any){
    return this.http.put(this.APIUrl+'/UserDetails',val);
  }
  getuser():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/UserDetails');
  }
  deleteuser(val:any){
    return this.http.delete(this.APIUrl+'/UserDetails',val);
  }
  addorder(val:any){
    return this.http.post(this.APIUrl+'/Cart',val);
  }
  updateorder(val:any){
    return this.http.put(this.APIUrl+'/Cart',val);
  }
  getorder():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Cart');
  }
  deleteorder(val:any){
    return this.http.delete(this.APIUrl+'/Cart',val);
  }
  getorderbyid(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Cart'+'/'+"'"+val+"'");
  }
  getbooksbyid(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/BookDetails'+'/'+val);
  }
  getuserbyemail(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/UserDetails'+'/'+"'"+val+"'");
  }


}
