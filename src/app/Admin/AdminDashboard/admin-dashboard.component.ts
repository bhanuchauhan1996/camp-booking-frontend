import { Router } from '@angular/router';
import { ICamp } from './../../Shared/Model/CampModel';
import { Component } from '@angular/core';
import { CampService } from 'src/app/Shared/Services/CampService';
import { AuthService } from 'src/app/Shared/Services/authService';

@Component({
    templateUrl:'./admin-dashboard.component.html'
})

// This component represent the admin dashboard
export class AdminDashBoardComponent{

    constructor(private campService:CampService,public auth:AuthService,private router:Router){}
    camp:ICamp[];
    source:string='assets/image/';
    imageWidth:number=200;
    imageMargin:number=700;
    imageHeight:number=180;
    marginTop:number=50;
    ngOnInit(){
    
        this.campService.getAllCamps().subscribe((data:ICamp[])=>{
            this.camp=data;
        })
    }

    // this method call when user clicks log out button
    logout(){
        this.auth.logout()
        this.router.navigate(['/admin']);
    }
}