import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnDestroy{

  constructor( ){
    //alert("i am page 1")
  }

  ngOnDestroy(){
    alert("destroy  page 1")
  }
}

