import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CritiquePageRoutingModule } from './critique-routing.module';

import { CritiquePage } from './critique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CritiquePageRoutingModule
  ],
  declarations: [CritiquePage]
})
export class CritiquePageModule {}
