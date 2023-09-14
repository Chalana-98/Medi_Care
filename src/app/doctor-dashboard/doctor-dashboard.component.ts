import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
  // standalone: true,
  // imports: [MatButtonModule, MatMenuModule, MatIconModule],
})
export class DoctorDashboardComponent{
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DoctorFormComponent, {
      width: '80%',
      height: '90%',
      data: {} // can pass data to the modal if needed
    });

    // Subscribe to the afterClosed event to get the result when the modal is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
