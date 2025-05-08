import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErreserbaPage } from './erreserba.page';

const routes: Routes = [
  {
    path: '',
    component: ErreserbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErreserbaPageRoutingModule {}
