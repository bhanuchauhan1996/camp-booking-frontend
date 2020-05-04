import { ICamp } from './../../Shared/Model/CampModel';
import { CampService } from './../../Shared/Services/CampService';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  

declare var $: any;
@Component({
    selector:'camp-list',
    templateUrl:'./camp-list.component.html',
    styles:['.active { color:red;cursor: pointer; }','label{color:black}','a{color:yellow;font-weight: bold;margin-right:10px;margin-bottom:0px}']
    
})
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
    
    $('.datepicker').datepicker({
        format: 'd-M-yyyy'
    })
    
    //this.totalrecord=this.camp.length;
}
ngOnDestroy(){
    this.campService.setdates(this.checkIn,this.checkOut);
}
getArrayFromNumber(length:number)
{
    
    return new Array(Math.ceil(length/2));
}
updateIndex(pageIndex)
{
    this.startIndex=pageIndex*2;
    this.endIndex=this.startIndex+2;
}
searchCamp(){
    this.campService.getCampUsingSearch(this.checkIn,this.checkOut).subscribe((data:ICamp[])=>{
        this.camp=data;
    })
    console.log("clcicked")
}
getCheckIn(data:HTMLInputElement)
{
this.checkIn=data.value;
//console.log(this.checkIn);
}
getCheckOut(data:HTMLInputElement)
{
    this.checkOut=data.value;
    //console.log(this.checkOut);
}

}