import { Component, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'test';
  name:string="";
  name1!:string;
  age:number=0;
  age1!:number;

  num1:number=0
  num2:number=0
  result?:number;
  @ViewChild("one")
  testComponent!:TestComponent;

  

  @ViewChild(TestComponent)
  testComponent1!:TestComponent;

  onClick(){
    this.title= Math.random().toString();
    this.name= Math.random().toString();
   this.testComponent.test1=Math.random();
   this.testComponent1.test1=Math.random();
    //alert(this.name)
  }
  sum():void{
    this.result=this.num1*1+this.num2*1;
  }
}
