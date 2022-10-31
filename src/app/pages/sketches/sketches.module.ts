import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SketchesPageRoutingModule } from './sketches-routing.module';

import { SketchesPage } from './sketches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SketchesPageRoutingModule
  ],
  declarations: [SketchesPage]
})
export class SketchesPageModule {}
