import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-hackathon-accueil',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatDialogModule,DialogComponent],
  templateUrl: './hackathon-accueil.component.html',
  styleUrl: './hackathon-accueil.component.css',
})
export class HackathonAccueilComponent {
  constructor (private dialog : MatDialog){

  }
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40%'
    });
  }



}

