import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {BlogsPageComponent} from "./pages/blogs-page/blogs-page.component";
import {MatrixPageComponent} from "./pages/matrix-page/matrix-page.component";
import {AppComponent} from "./app.component";
import {StatusPageComponent} from "./pages/status-page/status-page.component";
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register_page', component: RegisterPageComponent},
  {path: 'settings-page', component: SettingsPageComponent},
  {path: 'home_page', component:HomePageComponent},
  {path: 'blogs_page', component:BlogsPageComponent},
  {path: 'matrix_page', component:MatrixPageComponent},
  {path: 'status_page', component:StatusPageComponent},
  {path: 'patient_dashboard', component:PatientDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
