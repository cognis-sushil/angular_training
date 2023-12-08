import { Directive, ElementRef, Input,OnInit  } from '@angular/core';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective implements OnInit {

  @Input("appRoles") appRoles!:string
   
  @Input('first') f:any;
  constructor(private eleRef: ElementRef) {
    let role =localStorage.getItem("role");
    eleRef.nativeElement.style.display = "none"
    
    console.log(role)
    if(role=="Write"){
      eleRef.nativeElement.style.display = "block"
    }
   }

   ngOnInit() { 
    console.log("paramRole",this.f)
    console.log("appRoles",this.appRoles);
} 

}
