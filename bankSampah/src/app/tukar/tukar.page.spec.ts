import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TukarPage } from './tukar.page';

describe('TukarPage', () => {
  let component: TukarPage;
  let fixture: ComponentFixture<TukarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TukarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
