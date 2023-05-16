import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register_page', component: RegisterPageComponent},
  {path: 'settings-page', component: SettingsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
