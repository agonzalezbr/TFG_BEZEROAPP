import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZerbitzuakPagePage } from './zerbitzuak-page.page';

const routes: Routes = [
  {
    path: '',
    component: ZerbitzuakPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZerbitzuakPagePageRoutingModule {}
