import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
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

  onSwitchChange(event: any) {
    this.registerUser.userType = event.target.checked ? 'doctor' : 'patient';
  
   
    if (this.registerUser.userType === 'patient') {
      this.registerUser.speciality = '';
    }
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
    //const requestData = JSON.stringify(this.registerUser);

    this.http.post('https://localhost:7212/api/User/Register', this.registerUser)
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
    // alert('Form is invalid. Please check the required fields.');
    console.log('Please check the required fields');
  }
}
