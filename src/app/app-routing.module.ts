import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: './login-page.page',
    pathMatch: 'full'
  },

  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'check-hour-page',
    loadChildren: () => import('./check-hour-page/check-hour-page.module').then( m => m.CheckHourPagePageModule)
  },
  {
    path: 'calendar-page',
    loadChildren: () => import('./calendar-page/calendar-page.module').then( m => m.CalendarPagePageModule)
  },
  {
    path: 'hour-view-page',
    loadChildren: () => import('./hour-view-page/hour-view-page.module').then( m => m.HourViewPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
