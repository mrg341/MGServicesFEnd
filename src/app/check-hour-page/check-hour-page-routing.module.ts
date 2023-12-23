import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginPagePage } from '../login-page/login-page.page';
import { CalendarPagePage } from '../calendar-page/calendar-page.page';
import { CheckHourPagePage } from './check-hour-page.page';
import { HourViewPagePage } from '../hour-view-page/hour-view-page.page';
import { MainPagePage } from '../main-page/main-page.page';

const routes: Routes = [
  { path: '',component: MainPagePage },
  { path: '',component: LoginPagePage },
  { path: '',component: CalendarPagePage },
  { path: '',component: CheckHourPagePage },
  { path: '',component: HourViewPagePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckHourPagePageRoutingModule {}
