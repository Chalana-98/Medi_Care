import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MedicalRecord } from '../models/MedicalRecord.model';
import { Observable } from 'rxjs';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  medicalRecords: MedicalRecord[] = [];
  filteredMedicalRecords: MedicalRecord[] = [];
  searchPatientId: string = '';

  ngOnInit(): void {
    this.http.get<MedicalRecord[]>('https://localhost:7212/api/MedicalRecords').subscribe((data) => {
      this.medicalRecords = data;
      this.filteredMedicalRecords = data;
      console.log(this.medicalRecords);
    });
  }

  filterRecords(searchPatientId: string): void {
    this.filteredMedicalRecords = this.medicalRecords.filter((record) =>
      record.patientId.toString().includes(searchPatientId)
    );
    console.log(this.filteredMedicalRecords);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DoctorFormComponent, {
      width: '80%',
      height: '90%',
      data: {} // can pass data to the modal if needed
    });

    dialogRef.afterClosed().subscribe(() => {
      // Automatically reload data when the dialog is closed
      this.reloadData();
    });
  }

  // Function to reload data
  reloadData(): void {
    this.http.get<MedicalRecord[]>('https://localhost:7212/api/MedicalRecords').subscribe((data) => {
      this.medicalRecords = data;
      this.filteredMedicalRecords = data;
      console.log(this.medicalRecords);
    });
  }
}
