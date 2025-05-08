import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZerbitzuakPageRoutingModule } from './zerbitzuak-routing.module';

import { ZerbitzuakPage } from './zerbitzuak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZerbitzuakPageRoutingModule
  ],
  declarations: [ZerbitzuakPage]
})
export class ZerbitzuakPageModule {}
