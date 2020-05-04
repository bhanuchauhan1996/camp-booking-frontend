import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CampService } from 'src/app/Shared/Services/CampService';

@Component({
    templateUrl:'./add-camp.component.html'
})
export class AddCampComponent{

    constructor(private fb:FormBuilder,private router:Router,private campService:CampService){}
    addForm:FormGroup;

    ngOnInit(){
        this.addForm=this.fb.group({
            name:['',[Validators.required,Validators.pattern('^[a-z A-Z]*$'),Validators.minLength(3)]],
            price:['',Validators.required],
            location:['',Validators.required],
            capacity:['',Validators.required],
            description:['',Validators.required],
            rating:['',Validators.required],
            imageURL:[{value:'',disabled:true},Validators.required]
        })
    }
    onSubmit(){
        this.campService.saveCamp(this.addForm.getRawValue()).subscribe(()=>{
            this.router.navigate(['/admin/dashboard']);
          })
          
        
    }
    onCancel(){
      this.router.navigate(['/admin/dashboard']);
    }

    fileEvent(fileInput: HTMLInputElement){
        this.addForm.patchValue({imageURL:fileInput.files[0].name});
     }
}