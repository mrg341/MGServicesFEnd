import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HourViewPagePage } from './hour-view-page.page';

describe('HourViewPagePage', () => {
  let component: HourViewPagePage;
  let fixture: ComponentFixture<HourViewPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HourViewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
