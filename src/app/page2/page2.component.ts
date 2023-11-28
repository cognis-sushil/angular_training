import { Component,OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Emp } from '../class/emp';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnDestroy, OnInit{

  constructor(private router:Router ){
    alert("i am in constructor of page2")
  }

  ngOnInit(){
    alert("i am in init of page2")
  }
  ngOnDestroy(){
    alert(" destroy page 2")
  }
  goToPage1(){
    //this.router.navigate(["page1"])
    const emp:Emp={name:"one",age:22}
    this.router.navigate(["page1",emp])
  }

  caclculate(op:string,num1:number,num2:number):number{
    switch(op){
      case "+":
          return this.sum(num1,num2);
      case "-":
            return this.minus(num1,num2);  
    }
    return 0;
  }

  sum(num1:number,num2:number):number{
      return num1+num2;
  }


  
  minus(num1:number,num2:number):number{
    return num1-num2;
}
}
