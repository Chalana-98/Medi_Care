// matrix-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matrix-page',
  templateUrl: './matrix-page.component.html',
  styleUrls: ['./matrix-page.component.css'],
})
export class MatrixPageComponent {
  weight!: number;
  height!: number;
  age!:number;
  bodyfat!: number;
  gender!: string;
  activity!: string;
  bodyFat!: number;
  bmi: any;
  activityLevel!:number;

  constructor(private router: Router) {}

  captureGender(gender: string) {
    this.gender = gender; // Assign the selected gender ('male' or 'female') to this variable
  }
  updateActivity(selectedActivity: string , activityLevel: number) {
    this.activity = selectedActivity;
    this.activityLevel = activityLevel;
    console.log('Selected Activity:', this.activity);
  }
  

  calculateBMI() {
    // Calculate BMI here (weight and height are already bound to input fields)
    
    const bmi = (this.weight / ((this.height / 100) * (this.height / 100))).toFixed(2);
    this.bmi = parseFloat(bmi);
    
    // Navigate to StatusPage with BMI as a query parameter
    this.router.navigate(['/status_page'], { queryParams: {
       bmi: this.bmi,
      age: this.age,
      weight: this.weight,
      height: this.height,
      activity: this.activity,
    bodyFat: this.bodyFat,
    gender: this.gender,
   
      } });
  }

  
}