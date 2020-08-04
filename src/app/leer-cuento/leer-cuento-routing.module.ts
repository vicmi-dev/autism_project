import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerCuentoPage } from './leer-cuento.page';

const routes: Routes = [
  {
    path: '',
    component: LeerCuentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerCuentoPageRoutingModule {}
