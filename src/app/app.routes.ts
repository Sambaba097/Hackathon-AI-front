import { Routes } from '@angular/router';
import { HackathonListComponent } from './hackathon-list/hackathon-list.component';
import { HackathonAccueilComponent } from './hackathon-accueil/hackathon-accueil.component';
import { DialogComponent } from './dialog/dialog.component';

export const routes: Routes = [
    { path: 'hackathon-list', component: HackathonListComponent },
    {path: 'hackathon-accueil', component: HackathonAccueilComponent},
    {path: '', component: HackathonAccueilComponent},
    {path: 'dialog', component: DialogComponent},

];
