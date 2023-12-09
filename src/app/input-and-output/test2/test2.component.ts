import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  @Input("compnahyName") name!:string;

  other1!:string;
  @Input("other") 
  set other(val:any){
      this.other1=val;
  }
}
