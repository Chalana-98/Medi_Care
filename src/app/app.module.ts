import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyMaterialModule} from "./material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
