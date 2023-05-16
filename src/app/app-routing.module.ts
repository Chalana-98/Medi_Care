import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BlogsPageComponent} from "./blogs-page/blogs-page.component";
import {MatrixPageComponent} from "./matrix-page/matrix-page.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register_page', component: RegisterPageComponent},
  {path: 'settings-page', component: SettingsPageComponent},
  {path: 'home_page', component:HomePageComponent},
  {path: 'blogs_page', component:BlogsPageComponent},
  {path: 'matrix_page', component:MatrixPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
