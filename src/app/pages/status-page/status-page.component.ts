import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css'],
})
export class StatusPageComponent implements OnInit {
  bmi: number = 0;
  age: number = 0;
  weight: number = 0;
  height: number = 0;
  gender!: string;
  activity!: string;
  bodyFat: number = 0;
  tdee: number = 0;
  updatedBMI: number = 0;
  bmr: number = 0;
  isMetric: boolean = true;
  idealWeight: string = '';
  bmiScore: number = 0;
  bmiClassification: string = '';
  bmiCategory: string = '';


  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.bmi = params['bmi'];
      this.age = params['age'];
      this.weight = params['weight'];
      this.height = params['height'];
      this.gender = params['gender'];
      this.activity = params['activity'];
      this.bodyFat = params['bodyFat'];
      this.calculateBMR();
      this.calculateTDEE();
      this.calculateIdealWeightAndBMI(this.height, this.weight);
      
    });
  }
  calculateBMR() {
    if (this.gender === 'male') {
      this.bmr = 88.362 + 13.397 * this.weight + 4.799 * this.height - 5.677 * this.age;
    } else if (this.gender === 'female') {
      this.bmr = 447.593 + 9.247 * this.weight + 3.098 * this.height - 4.330 * this.age;
    }
    this.calculateTDEE();
  }

  calculateTDEE() {
    // Calculate BMR using Mifflin-St Jeor Equation
  

    // Calculate TDEE based on activity level
    let tdeeFactor = 0;

    switch (this.activity) {
      case 'Sedentary(Office Job)V':
        tdeeFactor = 1.2;
        break;
      case 'Light Exercise':
        tdeeFactor = 1.375;
        break;
      case 'Moderate Exercise':
        tdeeFactor = 1.55;
        break;
      case 'Heavy Exercise':
        tdeeFactor = 1.725;
        break;
      case 'Athlete':
        tdeeFactor = 1.9;
        break;
    }

    // Adjust BMR for body fat percentage if provided
    if (this.bodyFat > 0) {
      const leanMassPercentage = 100 - this.bodyFat;
      const leanMassFactor = leanMassPercentage / 100;
      this.bmr *= leanMassFactor;
    }

    // Calculate TDEE
    this.tdee = this.bmr * tdeeFactor;

    this.cd.detectChanges();
  }
  calculateIdealWeightAndBMI(height: number, weight: number) {
    const lowerRange = (height - 100) * 0.9;
    const upperRange = (height - 100) * 1.1;
  
    this.idealWeight = `${lowerRange.toFixed(1)} - ${upperRange.toFixed(1)} kg`;
  
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
    this.bmiScore = parseFloat(bmi);
  
    if (this.bmiScore < 18.5) {
      this.bmiClassification = 'Underweight';
    } else if (this.bmiScore < 25) {
      this.bmiClassification = 'Normal Weight';
    } else if (this.bmiScore < 30) {
      this.bmiClassification = 'Overweight';
    } else {
      this.bmiClassification = 'Obese';
    }
    this.determineBMICategory();
  }
  
  determineBMICategory() {
    if (this.bmi < 18.5) {
      this.bmiCategory = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi <= 24.99) {
      this.bmiCategory = 'Normal Weight';
    } else if (this.bmi >= 25 && this.bmi <= 29.99) {
      this.bmiCategory = 'Overweight';
    } else {
      this.bmiCategory = 'Obese';
    }
  }
  navigateToMatrixPage() {
    // Navigate back to the "matrix-page"
    this.router.navigate(['/matrix_page']);
  
    // Note: You can pass any additional queryParams or other navigation options as needed.
  }
  
}
