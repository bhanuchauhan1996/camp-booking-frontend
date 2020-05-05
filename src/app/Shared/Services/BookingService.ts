import { IBooking } from 'src/app/Shared/Model/BookingModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

//this class provide all the booking related service
export class BookingService{
    constructor(private http:HttpClient){}
    bookingNumber:string;

    getLatestOrder():Observable<IBooking>{
        
        return this.http.get<IBooking>("api/service")
        .pipe(catchError(this.handleError<IBooking>('getLatestOrder')))
      }
      getBookingByBookingNo(bookin:string):Observable<IBooking>{
        return this.http.get<IBooking>('api/booking?bookingNo='+bookin)
        .pipe(catchError(this.handleError<IBooking>('getBookingByBookingNo')))
      }

      saveBooking(booking){
          let options={headers:new HttpHeaders({'Content-Type':'application/json'})};
         return this.http.post<IBooking>('api/booking',booking,options)
          .pipe(catchError(this.handleError<IBooking>('save Booking')))
      }

      deleteBooking(bookin:string){
          return this.http.delete('api/service?id='+bookin)
          .pipe(catchError(this.handleError<IBooking>('save Booking')))
      }
      setBookingNo(bookingno:string)
      {
           this.bookingNumber=bookingno;
      }
      getBookingNo():string{
          return this.bookingNumber
      }

      private handleError<T>(operation='operation',result?:T){
        return(error:any):Observable<T>=>{
            console.error(error);
            return of(result as T)
        };
        
    }
}