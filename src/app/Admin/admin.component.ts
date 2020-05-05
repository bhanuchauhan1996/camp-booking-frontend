import { IUser } from './../Shared/Model/User';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampService } from '../Shared/Services/CampService';
import { AuthService } from '../Shared/Services/authService';

@Component({
    templateUrl:'./admin.component.html'
})
// Represent admin 
export class AdminComponent{

    user:IUser;
    isValid:boolean=false;
    constructor(private router:Router,private fb:FormBuilder,private camp:CampService,private authService:AuthService){}
    loginForm:FormGroup;
    ngOnInit(){
        this.loginForm=this.fb.group({
            username:['',Validators.required],
            password:['',[Validators.required]]

        })
       
    }
    
    //calls on submit button click
    async onSubmit(){

        this.authService.loginUser(this.loginForm.value.username,this.loginForm.value.password).subscribe((data:IUser)=>{
            this.user=data;
            if(data){
                this.authService.setUser(data);
                this.router.navigate(['/admin/dashboard']);
                
            }
           
        })
        await this.delay(1000);
        this.isValid=true;
    }

    // call on cancel button click
    onCancel(){
        
    this.router.navigate(['/camp']);
    }
     delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

   
    
}
