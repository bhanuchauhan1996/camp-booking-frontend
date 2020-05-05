import { ICamp } from './../../Shared/Model/CampModel';
import { CampService } from './../../Shared/Services/CampService';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'camp-list',
    templateUrl:'./camp-list.component.html',
    styles:['.active { color:red;cursor: pointer; }','label{color:black}','a{color:yellow;font-weight: bold;margin-right:10px;margin-bottom:0px}']
    
})
// This component represent the camp dashboard
export class CampListComponent implements OnInit{
constructor(private campService:CampService){}

camp:ICamp[];
startIndex=0;
endIndex=2;
checkIn:string;
checkOut:string;
imageWidth:number=200;
    imageMargin:number=700;
    imageHeight:number=180;
    marginTop:number=50;
source:string='assets/image/';
ngOnInit(){
    
    this.campService.getCamps().subscribe((data:ICamp[])=>{
        this.camp=data;
        
    });
    
}
ngOnDestroy(){
    this.campService.setdates(this.checkIn,this.checkOut);
}

// get the no. of camp
getArrayFromNumber(length:number)
{
    
    return new Array(Math.ceil(length/2));
}

// update page index
updateIndex(pageIndex)
{
    this.startIndex=pageIndex*2;
    this.endIndex=this.startIndex+2;
}
//search the camp
searchCamp(){
    this.campService.getCampUsingSearch(this.checkIn,this.checkOut).subscribe((data:ICamp[])=>{
        this.camp=data;
    })
    console.log("clcicked")
}

//get check in date
getCheckIn(data:HTMLInputElement)
{
this.checkIn=data.value;
//console.log(this.checkIn);
}

//get check out date
getCheckOut(data:HTMLInputElement)
{
    this.checkOut=data.value;
    //console.log(this.checkOut);
}

}