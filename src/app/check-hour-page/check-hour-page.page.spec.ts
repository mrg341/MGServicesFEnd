import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckHourPagePage } from './check-hour-page.page';

describe('CheckHourPagePage', () => {
  let component: CheckHourPagePage;
  let fixture: ComponentFixture<CheckHourPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckHourPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
