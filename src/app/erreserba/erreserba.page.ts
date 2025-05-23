import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import emailjs from 'emailjs-com';
import { MenuZerbitzuakService } from '../service/menu.zerbitzuak.service';

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
  servicios: any[] = [];
  serviciosDisponibles: any[] = [];
  fecha: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private menuZerbitzuakService: MenuZerbitzuakService
  ) {}

  ngOnInit(): void {
    this.menuZerbitzuakService.getZerbitzuak().subscribe(servicios => {
      this.serviciosDisponibles = servicios;
    });
  }

  volverAtras() {
    this.router.navigate(['/menu']);
  }

  async onSubmit() {
    const camposFaltantes: string[] = [];

    if (!this.nombre.trim()) camposFaltantes.push('nombre');
    if (!this.apellidos.trim()) camposFaltantes.push('apellidos');
    if (!this.fecha) camposFaltantes.push('fecha');
    if (this.servicios.length === 0) camposFaltantes.push('servicios');

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

    const confirmAlert = await this.alertController.create({
      header: 'Reserva confirmada',
      message: `Tu cita ha sido registrada con éxito para el día ${this.fecha}. ¡Te esperamos!`,
      buttons: [{
        text: 'OK',
        handler: async () => {
          this.menuZerbitzuakService.setHitzordua(
            this.nombre,
            this.apellidos,
            this.email,
            this.servicios,
            this.fecha
          ).subscribe({
            next: (response) => {
              console.log('Reserva registrada en el backend', response);
            },
            error: (error) => {
              console.error('Error al registrar la reserva', error);
            }
          });


          if (this.email.trim()) {
            await this.enviarCorreoEmailJS();

            const emailAlert = await this.alertController.create({
              header: 'Correo enviado',
              message: `Los detalles de tu cita han sido enviados a ${this.email}.`,
              buttons: [{
                text: 'OK',
                handler: () => {
                  this.resetFormulario();
                  this.router.navigate(['/menu']);
                }
              }]
            });

            await emailAlert.present();
          } else {
            this.resetFormulario();
            this.router.navigate(['/menu']);
          }
        }
      }]
    });

    await confirmAlert.present();

    console.log('Formulario enviado');
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('Email:', this.email);
    console.log('Servicios seleccionados:', this.servicios);
    console.log('Fecha:', this.fecha);
  }

  async enviarCorreoEmailJS() {

    const templateParams = {
      to_name: this.nombre,
      to_email: this.email,
      fecha: this.fecha,
      servicios: this.servicios.map(s => s.izena).join(', '),
      imagen_url: "https://imgur.com/wTBOISZ.png"
    };

    try {
      await emailjs.send(
        'service_u5uxxjc',
        'template_vhdobss',
        templateParams,
        '2bj8fpQtswENnuZAd'
      );
      console.log('Correo enviado');
    } catch (error) {
      console.error('Error al enviar correo', error);
    }
  }

  resetFormulario() {
    this.nombre = '';
    this.apellidos = '';
    this.email = '';
    this.servicios = [];
    this.fecha = '';
  }
}
