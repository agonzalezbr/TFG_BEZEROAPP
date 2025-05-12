import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZerbitzuakInfoPageRoutingModule } from './zerbitzuak-info-routing.module';

import { ZerbitzuakInfoPage } from './zerbitzuak-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZerbitzuakInfoPageRoutingModule
  ],
  declarations: [ZerbitzuakInfoPage]
})
export class ZerbitzuakInfoPageModule {}
