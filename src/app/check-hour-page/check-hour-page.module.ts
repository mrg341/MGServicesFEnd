import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckHourPagePageRoutingModule } from './check-hour-page-routing.module';

import { CheckHourPagePage } from './check-hour-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckHourPagePageRoutingModule
  ],
  declarations: [CheckHourPagePage]
})
export class CheckHourPagePageModule {}
