import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HourViewPagePageRoutingModule } from './hour-view-page-routing.module';

import { HourViewPagePage } from './hour-view-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HourViewPagePageRoutingModule
  ],
  declarations: [HourViewPagePage]
})
export class HourViewPagePageModule {}
