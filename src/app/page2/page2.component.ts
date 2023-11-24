import { Component,OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute, RouterModule} from '@angular/router';
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
    this.router.navigate(["page1",{name:"one",age:22}])
  }
}
