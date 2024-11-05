import { routes } from './../app.routes';
import { RouterLink } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterLink, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatDatepickerModule,FormsModule,MatFormFieldModule, ReactiveFormsModule],

  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent{
  hackathonForm !: FormGroup;
  constructor (private fb: FormBuilder, private fs: FormService){
  
  }
  ngOnInit() {
    this.hackathonForm = this.fb.group({
      titre: ['',[Validators.required]],
      description: ['',[Validators.required]],
      date: ['',[Validators.required]],
      partenaire: ['',[Validators.required]]
    });
  }
  ajouterHackathon(){
    if(this.hackathonForm.valid){
      this.fs.ajouterhackathon(this.hackathonForm.value).subscribe({
        next: () => {
          alert("produit ajouter avec succés");
        },
        error: (error) => {
          console.error(error);
        }
      })

    }
  }

  readonly startDate = new Date(2024, 0, 1);

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

  // private routes = inject(routes);




