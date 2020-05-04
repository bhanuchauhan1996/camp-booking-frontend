import { StarComponent } from './Shared/star.component';
import { EditCampComponent } from './Admin/EditCamp/edit-camp.component';
import { DeleteBookingComponent } from './Booking/DeleteBooking/delete-booking.component';
import { AdminComponent } from './Admin/admin.component';
import { ManageBookingComponent } from './Booking/ManageBooking/manage-booking.component';
import { Error404Component } from './Error/error-404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CampListComponent } from './Dashboard/CampList/camp-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './Shared/route';
import { AddBookingComponent } from './Booking/AddBooking/add-booking.component';
import { ConfirmationScreenComponent } from './Booking/ConfirmBooking/confirm-screen.component';
import { AdminDashBoardComponent } from './Admin/AdminDashboard/admin-dashboard.component';
import { AddCampComponent } from './Admin/AddCamp/add-camp.component';

@NgModule({
  declarations: [
    AppComponent,
    CampListComponent,
    Error404Component,
    ManageBookingComponent,
    AddBookingComponent,
    AdminComponent,
    ConfirmationScreenComponent,
    DeleteBookingComponent,
    AdminDashBoardComponent,
    AddCampComponent,
    EditCampComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
