import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private http: HttpClient, private renderer: Renderer2, private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    
  }

  @ViewChild('registerForm') registerForm!: NgForm;

  registerUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    password: '',
    nic: '',
    birthday: new Date(),
    email: '',
    address: '',
    userType: '',
    phoneNumbers: [{
      id: 0,
      userId: 0,
      phoneNumber: ''
    }]
  };

  onSwitchChange(event: any) {
    this.registerUser.userType = event.target.checked ? 'doctor' : 'patient';
  }

  addPhoneNumber() {
    this.registerUser.phoneNumbers.push({
      id: 0,
      userId: 0,
      phoneNumber: ''
    });
  }
  

  removePhoneNumber(index: number) {
    this.registerUser.phoneNumbers.splice(index, 1);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.performRegistration();
    } else {
      this.showValidationError();
    }
  }

  private performRegistration() {
    this.http.post('https://localhost:7212/api/User/', this.registerUser)
      .subscribe(
        (response: any) => {
          alert('Registration successful!');
          console.log('Registration successful:', response);
          this.registerForm.resetForm();
          this.router.navigate(['./login']);
        },
        (error: any) => {
          alert('Error during registration. Please try again.');
          console.error('Error during registration:', error);
          this.registerForm.resetForm();
        }
      );
  }

  private showValidationError() {
    alert('Form is invalid. Please check the required fields.');
  }
}
