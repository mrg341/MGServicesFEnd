import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login-page/login-page.page.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Menú Principal', url: '/main-page', icon: "lock-closed" },
    { title: 'Login', url: '/login-page', icon: "log-in" },
  ];
  public labels = ['Silvia: silvia@mgservicesmallorca.com', 'Cristina: cris@mgservicesmallorca.com', 'Móvil: 657 501 309'];
  constructor() {}
}

