import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})


export class MainPagePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    
  };

  redirCal(){
    this.router.navigate(['../calendar-page.page.html']);
  };
  
  redirCheck(){

  };
  
  redirHour(){

  };

  



}
