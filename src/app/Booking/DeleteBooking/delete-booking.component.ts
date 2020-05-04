import { Router } from '@angular/router';
import { BookingService } from './../../Shared/Services/BookingService';
import { Component } from '@angular/core';
import { IBooking } from 'src/app/Shared/Model/BookingModel';

@Component({
    templateUrl:'./delete-booking.component.html'
})
export class DeleteBookingComponent{

    constructor(private bookingService:BookingService,private router:Router){}

    bookingNumber:string;
    bookings:IBooking;
    ngOnInit(){
        this.bookingNumber=this.bookingService.getBookingNo();
        this.bookingService.getBookingByBookingNo(this.bookingNumber).subscribe((data:IBooking)=>{
            this.bookings=data;
        })
    }
    onSubmit()
    {
        this.bookingService.deleteBooking(this.bookingNumber).subscribe(()=>{
            this.router.navigate(['/camp']);
        })
       // this.router.navigate(['/camp']);
    }
    onCancel(){
        this.router.navigate(['/camp']);
    }
}