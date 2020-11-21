import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './components/login/signup/signup.component';
import {SigninComponent} from './components/login/signin/signin.component';
import {HomeComponent} from './components/home/home.component';
import {EmployeesNavbarComponent} from './components/employees/employees-navbar/employees-navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {ProfileComponent} from './components/employees/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HomeNavbarComponent} from './components/home/home-navbar/home-navbar.component';
import {ClientsComponent} from './components/clients/clients.component';
import {EmployeesComponent} from './components/employees/employees.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';
import { OwnersListComponent } from './components/vehicles/owners-list/owners-list.component';
import { MatCardModule } from '@angular/material/card';
import { VehiclesListComponent } from './components/vehicles/vehicles-list/vehicles-list.component';
import { OwnerComponent } from './components/owners/owner/owner.component';
  

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    EmployeesNavbarComponent,
    ProfileComponent,
    EmployeesComponent,
    HomeNavbarComponent,
    ClientsComponent,
    VehicleComponent,
    OwnersListComponent,
    VehiclesListComponent,
    OwnerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),    
    MatCardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
