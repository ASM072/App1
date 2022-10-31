import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SketchesPage } from './sketches.page';

const routes: Routes = [
  {
    path: '',
    component: SketchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SketchesPageRoutingModule {}
