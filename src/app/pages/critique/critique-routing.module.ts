import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CritiquePage } from './critique.page';

const routes: Routes = [
  {
    path: '',
    component: CritiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CritiquePageRoutingModule {}
