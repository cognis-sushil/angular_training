import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Component } from './page2.component';
import { Router } from '@angular/router';
import { Emp } from '../class/emp';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page2Component],
      providers:[{ provide: Router, useValue: router }]
    });
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('test goToPage1 method', () => {
    component.goToPage1();
    const emp:Emp={name:"one",age:22}
    expect(router.navigate).toHaveBeenCalledWith(['page1',emp]);
  });


  it('test ngOnDestroy method', () => {
    spyOn(window,"alert");
    component.ngOnDestroy();
     
    expect(window.alert).toHaveBeenCalled();
  });


  it('test sum method', () => {    
    expect(component.sum(10,40)).toEqual(50);
  });
  it('test minu method', () => {    
    expect(component.minus(10,40)).toEqual(-30);
  });
  
  it('test caclculate method', () => {  
    spyOn(component,"sum")  
    component.caclculate("+",10,40);
    expect(component.sum).toHaveBeenCalled();
  });

  
  it('test caclculate method', () => {    
    expect( component.caclculate("99",10,40)).toEqual(0);
  });
});
