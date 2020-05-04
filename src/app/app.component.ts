import { AuthService } from './Shared/Services/authService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthService){}
  title = 'CampBooking';
  ngOnInit(){
    this.authService.checkAuthenticationStatus();
  }
}
