import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuZerbitzuakService } from '../service/menu.zerbitzuak.service';

@Component({
  selector: 'app-zerbitzuak-info',
  templateUrl: './zerbitzuak-info.page.html',
  styleUrls: ['./zerbitzuak-info.page.scss'],
  standalone: false
})
export class ZerbitzuakInfoPage {

  constructor(private router: Router, private menuZerbitzuakService: MenuZerbitzuakService) {}
  
  serviciosDisponibles: any[] = [];

  ngOnInit(): void {
    this.menuZerbitzuakService.getZerbitzuak().subscribe(servicios => {
      this.serviciosDisponibles = servicios;
    });
  }

  // Método para volver al menú
  goBack() {
    this.router.navigate(['/menu']);
  }
}
