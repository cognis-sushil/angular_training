import { Component,OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../class/emp';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnDestroy, OnInit{

  constructor(private activatedRoute:ActivatedRoute ){
    //alert("i am page 1")
    
  }  
  ngOnInit(){
    this.activatedRoute.params.subscribe((data)=>{
    let emp = data as Emp;
      console.log("request data ",emp);
      console.log("request name ",emp.name);
      console.log("request age ",emp.age);
    });
  }

  ngOnDestroy(){
    alert("destroy  page 1")
  }
}

