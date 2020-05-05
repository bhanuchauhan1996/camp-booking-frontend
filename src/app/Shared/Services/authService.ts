import { IUser } from './../Model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

// this class provide the authentication service
export class AuthService{
    currentUser:IUser
    constructor(private http:HttpClient){}
    loginUser(userName:string,password:string):Observable<IUser>{

     return this.http.get<IUser>('api/login?username='+userName+'&password='+password)
        
    
    }

    // set the user
    setUser(user:IUser)
    {
        this.currentUser=user;
    }
    // check user is authenticated or not
     isAuthenticated(){
    return !!this.currentUser;
     }

     checkAuthenticationStatus(){
         
     }
     
     // log out the user
     logout(){
         this.currentUser=undefined;
     }
}