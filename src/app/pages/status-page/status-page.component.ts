import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

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


  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.bmi = params['bmi'];
      this.age = params['age'];
      this.weight = params['weight'];
      this.height = params['height'];
      this.gender = params['gender'];
      this.activity = params['activity'];
      this.bodyFat = params['bodyFat'];
      this.calculateTDEE();
    });
  }

  calculateTDEE() {
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr = 0;

    if (this.gender === 'male') {
      bmr = 88.362 + 13.397 * this.weight + 4.799 * this.height - 5.677 * this.age;
    } else if (this.gender === 'female') {
      bmr = 447.593 + 9.247 * this.weight + 3.098 * this.height - 4.330 * this.age;
    }

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
      bmr *= leanMassFactor;
    }

    // Calculate TDEE
    this.tdee = bmr * tdeeFactor;

    this.cd.detectChanges();
  }
}
