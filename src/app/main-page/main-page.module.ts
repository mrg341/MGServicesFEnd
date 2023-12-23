import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPagePage } from './main-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPagePageRoutingModule,
    RouterModule
  ],
  declarations: [MainPagePage]
})
export class MainPagePageModule {}
export { MainPagePage };

