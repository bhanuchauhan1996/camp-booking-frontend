import { ICamp } from './../../Shared/Model/CampModel';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CampService } from 'src/app/Shared/Services/CampService';

@Component({
    templateUrl:'./edit-camp.component.html'
})
//This component is used to edit the Camp
export class EditCampComponent{

    constructor(private fb:FormBuilder,private router:Router,
        private route:ActivatedRoute,
        private campService:CampService){}
        
    editForm:FormGroup;
    id:number= +this.route.snapshot.params['id'];
    
    ngOnInit(){
        this.campService.getCampById(this.id).subscribe((data:ICamp)=>{
            this.editForm=this.fb.group({
                campId:{value:this.id,disabled: true},
                name:[data?.Name,[Validators.required,Validators.pattern('^[a-z A-Z]*$'),Validators.minLength(3)]],
                price:[data?.Price,Validators.required],
                location:[data?.Location,Validators.required],
                capacity:[data?.Capacity,Validators.required],
                description:[data?.Description,Validators.required],
                rating:[data?.Rating,Validators.required],
                imageURL:[{value:data?.ImageURL,disabled:true},Validators.required]
                
            })  
          })
        
       
        
    }
    
    // call when user click submit button
    onSubmit(){
        this.campService.updateCamp(this.id,this.editForm.getRawValue()).subscribe(()=>{
            this.router.navigate(['/admin/dashboard']);
        })
        
    }

    // when user click delete button
    onDelete(){
        this.campService.deleteCamp(this.id).subscribe(()=>{
            this.router.navigate(['/admin/dashboard']);
        })
    }

    // call when user click cancel button
    onCancel(){
      this.router.navigate(['/admin/dashboard']);
     // console.log(this.camp);
      
    }

    // used to fetch the name of file from file type
    fileEvent(fileInput: HTMLInputElement){
        this.editForm.patchValue({imageURL:fileInput.files[0].name});
     }
   
}