import { Component } from '@angular/core';
import { Emp } from '../class/emp';

@Component({
  selector: 'app-directve',
  templateUrl: './directve.component.html',
  styleUrls: ['./directve.component.scss']
})
export class DirectveComponent {
  hideAndShow:boolean=false;

  listOfEmp!:Emp[];

  constructor( ){
    //alert("i am page 1")
    this.listOfEmp=[];
    let emp= {id:1,name:"one",age:1}
    this.listOfEmp.push(emp);

    emp= {id:2,name:"two",age:2}
    this.listOfEmp.push(emp);

    emp= {id:3,name:"three",age:23}
    this.listOfEmp.push(emp);
  }  
   

  toggle(){
    this.hideAndShow= !this.hideAndShow;
    /*if(this.hideAndShow==true){
      this.hideAndShow=false;
    }else{
      this.hideAndShow=true;
    }
    */

  }
}
