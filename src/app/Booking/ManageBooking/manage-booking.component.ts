import { IBooking } from 'src/app/Shared/Model/BookingModel';
import { BookingService } from './../../Shared/Services/BookingService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl:'./manage-booking.component.html'
})
// This component will manage the booking
export class ManageBookingComponent{

    constructor(private router:Router,private fb:FormBuilder,private bookingService:BookingService){}
    manageForm:FormGroup;
    bookingNumber:string;
    booking:IBooking;
    isValid:boolean=false;
    ngOnInit(){
        this.manageForm=this.fb.group({
            bookingNo:['',Validators.required],
        })
    }
    
    onSubmit(){
        console.log("click");
        this.bookingNumber=this.manageForm.value.bookingNo;
        this.bookingService.setBookingNo(this.bookingNumber);
        this.bookingService.getBookingByBookingNo(this.bookingNumber).subscribe((data:IBooking)=>{
            this.booking=data;
            if(!data){
              this.isValid=true;
            }
            else{
                this.router.navigate(['/booking/delete']);
            }
        })
        
        console.log(this.bookingNumber);
    }
    onCancel(){
        
    this.router.navigate(['/camp']);
    }
    
}