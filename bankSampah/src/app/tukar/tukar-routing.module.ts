import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TukarPage } from './tukar.page';

const routes: Routes = [
  {
    path: '',
    component: TukarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TukarPageRoutingModule {}
