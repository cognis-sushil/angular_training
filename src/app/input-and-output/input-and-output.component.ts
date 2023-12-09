import { Component } from '@angular/core';

@Component({
  selector: 'app-input-and-output',
  templateUrl: './input-and-output.component.html',
  styleUrls: ['./input-and-output.component.scss']
})
export class InputAndOutputComponent {
radomNmber!:string;
name:string="";
addValue(){
  this.radomNmber=String(Math.random());
}
}
