import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarPagePage } from './calendar-page.page';

describe('CalendarPagePage', () => {
  let component: CalendarPagePage;
  let fixture: ComponentFixture<CalendarPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
