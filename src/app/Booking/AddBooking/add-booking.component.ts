import { BookingService } from './../../Shared/Services/BookingService';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CampService } from 'src/app/Shared/Services/CampService';


@Component({
    templateUrl:'./add-booking.component.html'
})

export class AddBookingComponent{

   bookingForm:FormGroup;
    constructor(private route:ActivatedRoute,
        private campService:CampService,
        private bookingService:BookingService,
        private fb:FormBuilder,private router:Router){}
   checkIn:string;
   checkOut:string;
   days:number;
   
    ngOnInit(){
        this.checkOut=this.campService.getCheckOut();
        this.checkIn=this.campService.getCheckIn();
        this.days=this.campService.getDateDifference();

        if(this.checkIn==undefined){
            this.checkIn=this.campService.getDate();
            this.days=1;
        }
        if(this.checkOut==undefined)
        {
            this.checkOut=this.campService.getNextDate();
            this.days=1;
        }

        this.bookingForm=this.fb.group({
            campId:{value:+this.route.snapshot.params['id'],disabled: true},
            checkIn:{value:this.checkIn,disabled:true},
            checkOut:{value:this.checkOut,disabled:true},
            totalDays:{value:this.days,disabled:true},
            contactNo:['',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9 ]*$')]],
            billAddress:['',Validators.required],
            state:['',[Validators.required,Validators.pattern('^[a-z A-Z]*$')]],
            country:['',[Validators.required,Validators.pattern('^[a-z A-Z]*$')]],
            ZIP:['',Validators.required]
        
    
        });
        
       console.log(+this.route.snapshot.params['id']);
       
    }

    
    get registerFormControl() {
        return this.bookingForm.controls;
      }
      onSubmit()
      {
          this.bookingService.saveBooking(this.bookingForm.getRawValue()).subscribe(()=>{
            this.router.navigate(['/camp/booking']);
          })
          console.log(this.bookingForm.getRawValue());
          
      }
      onCancel()
      {
         this.router.navigate(['/camp']);
      }
     
}