import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('AppComponent with Entry Compon', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(  () => {TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule],
    declarations: [AppComponent,TestComponent,HeaderComponent,FotterComponent]
  })
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges(); 
  debugger;
    
});

  it('should create the app', () => {     
    expect(component).toBeTruthy();
  });

  it('should test the onClick method', () => {
    component.onClick();
    expect(component.title).toBeLessThanOrEqual(1)
  });
  
  it('should test the sum method', () => {
    component.num1=10;
    component.num2=40;
    component.sum();
    expect(component.result).toEqual(50)
  });

  it('should test the sum by html', () => {
    spyOn(component, 'sum');
    let button = fixture.debugElement.nativeElement.querySelector('#sum');
    button.click();
    expect(component.sum).toHaveBeenCalledOnceWith();
  });

  it('should test the sum by input from html ', () => {     
    let num1 = fixture.debugElement.nativeElement.querySelector('#num1');
    num1.value="20"
    console.log(num1);   
    num1.dispatchEvent(new Event('input'));
    let num2 = fixture.debugElement.nativeElement.querySelector('#num2');
    num2.value="10"
     num2.dispatchEvent(new Event('input'));
    //fixture.detectChanges();
    // num2.dispatchEvent(new Event('20'));
    let button = fixture.debugElement.nativeElement.querySelector('#sum');
    button.click();
    expect(component.result).toEqual(30);   
    
    
  });


});
