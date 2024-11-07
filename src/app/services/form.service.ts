import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:3200/api/hackathon'; 

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les données du formulaire
  ajouterhackathon(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
  // Méthode pour récupérer tous les hackathons
  recupererhackathon() {
    return this.http.get<any>(`${this.apiUrl}/recup`);
  }


}
