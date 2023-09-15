import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent {
  constructor(public dialogRef: MatDialogRef<DoctorFormComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
