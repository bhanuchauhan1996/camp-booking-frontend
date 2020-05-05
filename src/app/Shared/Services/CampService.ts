import { ICamp } from './../Model/CampModel';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { IBooking } from '../Model/BookingModel';


@Injectable({providedIn:'root'})
//this class provide camp related services
export class CampService{
    
    constructor(private http:HttpClient){}
 
  checKIn:string;
  checkOut:string;
  username:string;
  password:string;
  camp:ICamp;

  getCampById(id:number):Observable<ICamp>{
   
    let option={headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})};
      return this.http.get<ICamp>(`/api/camp/${id}`,option)
      .pipe(catchError(this.handleError<ICamp>('getCamp')))
  }

  getCamps():Observable<ICamp[]>{
    return this.http.get<ICamp[]>("api/dashboard")
    .pipe(catchError(this.handleError<ICamp[]>('getCamps',[])))
  }

  getAllCamps():Observable<ICamp[]>{
    let option={headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)})};
    return this.http.get<ICamp[]>("api/camp",option)
    .pipe(catchError(this.handleError<ICamp[]>('getAllCamps',[])))
  }

  getCampUsingSearch(checkIN:string,checkOut:string):Observable<ICamp[]>{
      return this.http.get<ICamp[]>('api/dashboard?checkIN='+checkIN+'&checkOut='+checkOut)
      .pipe(catchError(this.handleError<ICamp[]>('getCampUsingSearch',[])))
    }

  saveCamp(camp){
    let options={headers:new HttpHeaders({'Content-Type':'application/json'})};
   return this.http.post<IBooking>('api/camp',camp,options)
    .pipe(catchError(this.handleError<IBooking>('save camp')))
}
setCamp(camp:ICamp){
    this.camp=camp;
}

updateCamp(id:number,camp)
{
    let options={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put<IBooking>('api/camp/'+id,camp,options)
    .pipe(catchError(this.handleError<IBooking>('update camp')))
}

deleteCamp(id:number){
    return this.http.delete('api/camp?id='+id)
    .pipe(catchError(this.handleError<IBooking>('save Booking')))
}

  setdates(checKIn:string,checkOut:string)
  {
       this.checKIn=checKIn;
       this.checkOut=checkOut;
  }
  getCheckIn():string{
      return this.checKIn;
  }
  getCheckOut():string{
      return this.checkOut;
  }
getDate():string{
    var today = new Date();
    var str=new String();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

str = dd + '/' + mm + '/' + yyyy;
return str.toString();
}
getNextDate():string{
    var today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var next=new String();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    next = dd + '/' + mm + '/' + yyyy;
    return next.toString();
}

getDateDifference():number{
    
    let Date1 = new Date(this.checKIn);
    let Date2= new Date(this.checkOut);
    
    var diff = Math.abs(Date1.getTime() - Date2.getTime());
     var days = Math.ceil(diff / (1000 * 3600 * 24)); 
     
    return days;
}

setUser(username:string,pass:string)
{
    this.username=username;
    this.password=pass;
}

private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
        console.error(error);
        return of(result as T)
    };
    
}

}