import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerCuentoPageRoutingModule } from './leer-cuento-routing.module';

import { LeerCuentoPage } from './leer-cuento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerCuentoPageRoutingModule
  ],
  declarations: [LeerCuentoPage]
})
export class LeerCuentoPageModule {}
