import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErreserbaPageRoutingModule } from './erreserba-routing.module';

import { ErreserbaPage } from './erreserba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErreserbaPageRoutingModule
  ],
  declarations: [ErreserbaPage]
})
export class ErreserbaPageModule {}
