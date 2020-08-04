import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentoPage } from './cuento.page';

const routes: Routes = [
  {
    path: '',
    component: CuentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentoPageRoutingModule {}
