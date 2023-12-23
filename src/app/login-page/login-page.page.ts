import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var LoginComponent:any;
declare var DetailComponent:any;
@NgModule({
  imports: [
  RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
})
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
    public appPages = [
      { title: 'Menú Principal', url: '/main-page', icon: "lock-closed" },
      { title: 'Login', url: '/login-page', icon: "log-in" },
    ];
    public labels = ['Silvia: silvia@mgservicesmallorca.com', 'Cristina: cris@mgservicesmallorca.com', 'Móvil: 657 501 309'];


}
