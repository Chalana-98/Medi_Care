import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http: HttpClient, private renderer: Renderer2, private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    
  }

  @ViewChild('loginForm') loginForm!: NgForm;

  loginUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    password: '',
    nic: '',
    birthday: new Date(),
    email: '',
    address: '',
    userType: 'patient',
    height: 0.0,
    weight:0.0,
    speciality:'',
    phoneNumbers: [{
      id: 0,
      userId: 0,
      phoneNumber: ''
    }]
  };

  onSubmit() {
    if (this.loginForm.valid) {
      this.performLogin();
    } else {
      this.showValidationError();
    }
  }
 

  
  private performLogin() {
    this.http.post('https://localhost:7212/api/User/LogIn', this.loginUser)
      .subscribe(
        (response: any) => {
          
          if (response && response.userType) {
            alert('Login successful!');
            console.log('Login successful:', response);
            this.loginForm.resetForm();
  
            // Use the userType to determine the route
            if (response.userType === 'patient') {
              this.router.navigate(['./patient_dashboard']);
            } else if (response.userType === 'doctor') {
              this.router.navigate(['./doctor_dashboard']);
            } else {
              alert('Error during Login. Invalid user type');
            }
          } else {
            alert('Error during Login. User type not provided in the response.');
          }
        },
        (error: any) => {
          alert('Error during Login. Please try again.');
          console.error('Error during Login:', error);
          this.loginForm.resetForm();
        }
      );
  }
  
  

  private showValidationError() {
    
    console.log('Please check the required fields');
  }
}
