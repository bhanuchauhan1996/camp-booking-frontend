import { EditCampComponent } from './../Admin/EditCamp/edit-camp.component';
import { DeleteBookingComponent } from './../Booking/DeleteBooking/delete-booking.component';
import { AdminComponent } from './../Admin/admin.component';
import { ManageBookingComponent } from './../Booking/ManageBooking/manage-booking.component';
import { Routes } from '@angular/router';
import { CampListComponent } from '../Dashboard/CampList/camp-list.component';
import { AddBookingComponent } from '../Booking/AddBooking/add-booking.component';
import { Error404Component } from '../Error/error-404.component';
import { ConfirmationScreenComponent } from '../Booking/ConfirmBooking/confirm-screen.component';
import { AdminDashBoardComponent } from '../Admin/AdminDashboard/admin-dashboard.component';
import { AddCampComponent } from '../Admin/AddCamp/add-camp.component';

export const appRoutes:Routes=[
{path:'camp',component:CampListComponent},
{path:'camp/booking',component:ConfirmationScreenComponent},
{path:'camp/book/:id',component:AddBookingComponent},
{path:'camp/manage',component:ManageBookingComponent},
{path:'admin',component:AdminComponent},
{path:'admin/edit/:id',component:EditCampComponent},
{path:'admin/dashboard',component:AdminDashBoardComponent},
{path:'admin/addcamp',component:AddCampComponent},
{path:'booking/delete',component:DeleteBookingComponent},
{path:'404',component:Error404Component},
{path:'',redirectTo:'/camp',pathMatch:'full'}
]