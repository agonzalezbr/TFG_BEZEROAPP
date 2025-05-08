import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZerbitzuakPagePageRoutingModule } from './zerbitzuak-page-routing.module';

import { ZerbitzuakPagePage } from './zerbitzuak-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZerbitzuakPagePageRoutingModule
  ],
  declarations: [ZerbitzuakPagePage]
})
export class ZerbitzuakPagePageModule {}
