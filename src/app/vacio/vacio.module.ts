import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacioPageRoutingModule } from './vacio-routing.module';

import { VacioPage } from './vacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacioPageRoutingModule
  ],
  declarations: [VacioPage]
})
export class VacioPageModule {}
