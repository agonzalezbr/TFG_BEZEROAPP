import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zerbitzuak-info',
  templateUrl: './zerbitzuak-info.page.html',
  styleUrls: ['./zerbitzuak-info.page.scss'],
  standalone: false
})
export class ZerbitzuakInfoPage {
  zerbitzuak = [
    {
      izena: 'Ile-mozketa',
      prezioa: 12,
      irudia: 'assets/img/corte.jpg',
    },
    {
      izena: 'Orrazkera',
      prezioa: 15,
      irudia: 'assets/img/peinado.png',
    },
    {
      izena: 'Kolorazioa',
      prezioa: 25,
      irudia: 'assets/img/tinte.jpeg',
    },
    {
      izena: 'Tratamendua',
      prezioa: 18,
      irudia: 'assets/img/tratamiento.jpg',
    },
  ];

  constructor(private router: Router) {}

  // Método para volver al menú
  goBack() {
    this.router.navigate(['/menu']);
  }
}
