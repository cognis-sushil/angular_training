import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective {

  constructor(private eleRef: ElementRef) {

    let role =localStorage.getItem("role");
    eleRef.nativeElement.style.display = "none"
    console.log(role)
    if(role=="Write"){
      eleRef.nativeElement.style.display = "block"
    }
   }

}
