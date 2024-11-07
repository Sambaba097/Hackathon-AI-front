import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormService } from '../services/form.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-hackathon-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatTableModule],
  templateUrl: './hackathon-list.component.html',
  styleUrl: './hackathon-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HackathonListComponent {
  hackathons: any[] = [];
  displayedColumns: string[] = ['titre', 'description', 'date', 'partenaire'];

  constructor(private fs: FormService){}

  ngOnInit(){
    this.fs.recupererhackathon().subscribe({
      next: (data) => {
  
        console.log('Données reçues:', data);  // Afficher les données dans la console

        console.log('Nombre de hackathons:', data.length);
        this.hackathons = data;  // Assigner les données à la liste hackathons
        console.log( this.hackathons);

      },
      error: (error) => {
        console.error('Erreur lors de la récupération des hackathons', error);
      },
    });
  }

}
