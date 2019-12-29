import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacioPage } from './vacio.page';

const routes: Routes = [
  {
    path: '',
    component: VacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacioPageRoutingModule {}
