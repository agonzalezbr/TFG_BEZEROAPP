import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erreserba',
  templateUrl: './erreserba.page.html',
  styleUrls: ['./erreserba.page.scss'],
  standalone: false
})
export class ErreserbaPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  servicios: string[] = [];
  serviciosDisponibles: string[] = [];  // Se llenará con datos de una API más adelante
  fecha: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simulación de servicios hasta que la API esté disponible
    this.serviciosDisponibles = ['Corte de pelo', 'Coloración', 'Peinado'];
  }

  onSubmit() {
    console.log('Formulario enviado');
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('Email:', this.email);
    console.log('Servicios seleccionados:', this.servicios);
    console.log('Fecha:', this.fecha);
  }

  volverAtras() {
    this.router.navigate(['/menu']);
  }
}
