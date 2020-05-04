import { IUser } from './../Model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AuthService{
    currentUser:IUser
    constructor(private http:HttpClient){}
    loginUser(userName:string,password:string):Observable<IUser>{

     return this.http.get<IUser>('http://localhost:49979/api/login?username='+userName+'&password='+password)
        
    //   this.currentUser={
    //       Id:1,
    //     UserName:'bhanu',
    //     Password:'admin@123'
    //   }  
    }

    setUser(user:IUser)
    {
        this.currentUser=user;
    }
     isAuthenticated(){
    return !!this.currentUser;
     }

     checkAuthenticationStatus(){
         
     }
     
     logout(){
         this.currentUser=undefined;
     }
}