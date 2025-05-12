import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZerbitzuakInfoPage } from './zerbitzuak-info.page';

const routes: Routes = [
  {
    path: '',
    component: ZerbitzuakInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZerbitzuakInfoPageRoutingModule {}
