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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPageComponent,
    SettingsPageComponent,
    HomePageComponent,
    BlogsPageComponent,
    MatrixPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MyMaterialModule,
        BrowserAnimationsModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
