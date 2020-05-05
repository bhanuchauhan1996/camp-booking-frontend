import { IBooking } from 'src/app/Shared/Model/BookingModel';
import { BookingService } from './../../Shared/Services/BookingService';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl:'./confirm-screen.component.html'
})

//This is the confirm screen component
export class ConfirmationScreenComponent{

 constructor(private bookingService:BookingService){}
 bookings:IBooking;
 
 ngOnInit(){
     this.bookingService.getLatestOrder().subscribe((data:IBooking)=>{
         this.bookings=data;
     });
 }
}