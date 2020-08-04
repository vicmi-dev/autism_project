import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentoPageRoutingModule } from './cuento-routing.module';

import { CuentoPage } from './cuento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentoPageRoutingModule
  ],
  declarations: [CuentoPage]
})
export class CuentoPageModule {}
