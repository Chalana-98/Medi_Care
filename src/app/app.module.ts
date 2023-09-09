import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyMaterialModule} from "./material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';

import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';
import { MatrixPageComponent } from './pages/matrix-page/matrix-page.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { StatusPageComponent } from './pages/status-page/status-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule} from "@angular/forms";
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './widget/chart/chart.component';
import { SidenavComponent } from './widget/sidenav/sidenav.component';
import { ContentCardsComponent } from './widget/content-cards/content-cards.component';
import { PatientRightcardComponent } from './widget/patient-rightcard/patient-rightcard.component';
import { CalenderPageComponent } from './widget/calender-page/calender-page.component';
import { EventcardComponent } from './eventcard/eventcard.component';





@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DoctorFormComponent,
=======

    DoctorFormComponent,

>>>>>>> 5e45809c483273a9200eaabc9618b6e4174e3240
    LoginComponent,
    RegisterPageComponent,
    SettingsPageComponent,
    HomePageComponent,
    BlogsPageComponent,
    MatrixPageComponent,
    StatusPageComponent,
    PatientDashboardComponent,
    ChartComponent,
    SidenavComponent,
    ContentCardsComponent,
    PatientRightcardComponent,
    CalenderPageComponent,
    EventcardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
