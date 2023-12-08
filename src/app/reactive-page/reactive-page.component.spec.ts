import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePageComponent } from './reactive-page.component';

describe('ReactivePageComponent', () => {
  let component: ReactivePageComponent;
  let fixture: ComponentFixture<ReactivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivePageComponent]
    });
    fixture = TestBed.createComponent(ReactivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
