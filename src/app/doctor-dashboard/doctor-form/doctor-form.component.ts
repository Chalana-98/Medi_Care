import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
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
  medicalRecord: MedicalRecord = {
    medicalRecordDate: new Date(),
    doctorId: 0,
    patientId: 0,
    category: '',
    medicalRecordDescription: ''
  };
  file: File | undefined = undefined;

  isFormValid: boolean = true;

  @ViewChild('recordForm') recordForm!: NgForm;
  @Output() dataSaved: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<DoctorFormComponent>, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.recordForm.valid && this.file) {
      this.isFormValid = true; 
      this.saveMedicalRecord();
    } else {
      this.isFormValid = false; 
      this.showValidationError();
    }
  }
  

  private saveMedicalRecord() {
    const formData = new FormData();
    formData.append('DoctorId', String(this.medicalRecord.doctorId));
    formData.append('PatientId', String(this.medicalRecord.patientId));
    formData.append('Category', this.medicalRecord.category);
    formData.append('Date', this.formatDate(this.medicalRecord.medicalRecordDate));
    formData.append('Description', this.medicalRecord.medicalRecordDescription);
    formData.append('File', this.file as File);

    this.http.post('https://localhost:7212/api/MedicalRecords', formData, { responseType: 'text' })
      .subscribe(
        (response) => {
          console.log('Response from the server:', response);
          this.dialogRef.close();
          this.dataSaved.emit();
          this.router.navigate(['./doctor_dashboard']);
        },
        (error) => {
          console.error('Error:', error);
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
  
  showValidationError() {
    if (!this.isFormValid) {
      return 'Form is not valid or file is not selected';
    } else {
      return ''; // Return an empty string when there are no errors
    }
  }
  
  
}
