import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyMaterialModule} from "./material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { MatrixPageComponent } from './matrix-page/matrix-page.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { StatusPageComponent } from './status-page/status-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPageComponent,
    SettingsPageComponent,
    HomePageComponent,
    BlogsPageComponent,
    MatrixPageComponent,
    StatusPageComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
