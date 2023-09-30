import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MedicalRecord } from 'src/app/models/MedicalRecord.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent {

  @ViewChild('recordForm') recordForm!: NgForm;

  medicalRecord: MedicalRecord = {
    date: new Date(),
    doctorId: 0,
    patientId: 0,
    category: '',
    description: ''
  };
  file: File | undefined = undefined;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<DoctorFormComponent>,private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(fileInput: any) {
    const formData = new FormData();
    formData.append('DoctorId', String(this.medicalRecord.doctorId)); // Ensure correct field names
    formData.append('PatientId', String(this.medicalRecord.patientId)); // Ensure correct field names
    formData.append('Category', this.medicalRecord.category);
    formData.append('Date', this.formatDate(this.medicalRecord.date)); // Ensure date is formatted correctly
    formData.append('Description', this.medicalRecord.description);
    formData.append('File', fileInput.files[0]);

    this.http.post<any>('https://localhost:7212/api/MedicalRecords', formData)
      .subscribe(
        (response) => {
          console.log('Response from the server:', response);

          this.router.navigate(['./doctor_dashboard']);
        },
        (error) => {
          console.error('Error:', error);
          this.recordForm.resetForm();
          
        }
      );
  }

  onFileChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
