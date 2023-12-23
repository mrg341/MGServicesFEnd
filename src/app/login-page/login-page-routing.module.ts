import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CalendarPagePage } from '../calendar-page/calendar-page.page';
import { CheckHourPagePage } from '../check-hour-page/check-hour-page.page';
import { HourViewPagePage } from '../hour-view-page/hour-view-page.page';
import { MainPagePage } from '../main-page/main-page.page';

const routes: Routes = [
  { path: '',component: MainPagePage },
  { path: '',component: CalendarPagePage },
  { path: '',component: CheckHourPagePage },
  { path: '',component: HourViewPagePage }
];

export class LoginPagePageRoutingModule {}
