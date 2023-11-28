import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectveComponent } from './directve.component';
import { By } from '@angular/platform-browser';

fdescribe('DirectveComponent', () => {
  let component: DirectveComponent;
  let fixture: ComponentFixture<DirectveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectveComponent]
    });
    fixture = TestBed.createComponent(DirectveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  
  it('should ng for', () => {
   // let input = fixture.debugElement.queryAll(By.css('tr'));

   component.listOfEmp=[];
   let emp= {id:1,name:"one",age:1}
   component.listOfEmp.push(emp);

   emp= {id:2,name:"two",age:2}
   component.listOfEmp.push(emp);

   emp= {id:3,name:"three",age:23}
   component.listOfEmp.push(emp);
   
   emp= {id:4,name:"three",age:23}
   component.listOfEmp.push(emp);

   
   emp= {id:5,name:"three",age:23}
   component.listOfEmp.push(emp);
   debugger;

   fixture.detectChanges();
   let tr= fixture.debugElement.query(By.css('tbody'));
   // let tbody = fixture.debugElement.nativeElement.querySelector('tbody');
    //console.log("dddddd 2",tbody)
    //console.log("aa 2",aa.children)
    expect(tr.children.length).toEqual(5)
  });
});
