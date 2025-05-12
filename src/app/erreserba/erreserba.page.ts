import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit(): void {
    // Simulación de servicios hasta que la API esté disponible
    this.serviciosDisponibles = ['Corte de pelo', 'Coloración', 'Peinado'];
  }

  volverAtras() {
    this.router.navigate(['/menu']);
  }

  async onSubmit() {
  const camposFaltantes: string[] = [];

  if (!this.nombre.trim()) {
    camposFaltantes.push('nombre');
  }

  if (!this.apellidos.trim()) {
    camposFaltantes.push('apellidos');
  }

  if (!this.fecha) {
    camposFaltantes.push('fecha');
  }

  if (this.servicios.length === 0) {
    camposFaltantes.push('servicios');
  }

  if (camposFaltantes.length > 0) {
    const mensaje = `Por favor, rellena ${camposFaltantes.join(', ')} antes de confirmar la reserva.`;

    const alert = await this.alertController.create({
      header: 'Campos incompletos',
      message: mensaje.charAt(0).toUpperCase() + mensaje.slice(1),
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

  console.log('Formulario enviado');
  console.log('Nombre:', this.nombre);
  console.log('Apellidos:', this.apellidos);
  console.log('Email:', this.email);
  console.log('Servicios seleccionados:', this.servicios);
  console.log('Fecha:', this.fecha);
}


}
