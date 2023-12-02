import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  test1:number=10;
  inpvalue:number=2;
  style1={}
  index:number[]=[1,2,3,4,50,60]
  constructor(){
    this.style1={"height":(this.inpvalue*10)+"px"};
  }
  test(){
    alert(this.inpvalue)
    this.style1={"height":(this.inpvalue*10)+"px"};
  }

  applyClass():string{
     switch(this.inpvalue*1){
      case 1: 
          return "one";
      case 2:
          return "two";

          case 3:
            return "three";
     }
     return "";
  }
}
