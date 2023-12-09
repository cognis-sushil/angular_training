import { Component } from '@angular/core';
import { Login } from '../class/login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.scss']
})
export class ReactivePageComponent {
  //First Way
  loginId!: string;
  password!: string;
  showRem!: string;
  msg!: string;
  showError: boolean = false
  onLogin() {
    this.showError = false;
    debugger;
    if (this.loginId == "" || !this.loginId) {
      this.msg = "Pls enter login id";
      this.showError = true;
      return;
    }
    let requestData: Login = { userId: this.loginId, password: this.password };
    alert(JSON.stringify(requestData));
  }
  //End of First way

  //Second Way
  formGroup!: FormGroup
  test!:FormControl;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userId: ["name222", [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.maxLength(8)]],
      personal:this.fb.group({ address1: ["nam222"], address2: ["nam222"],})
    });
    this.test= new FormControl("pls ente")
  }

  onLoginReactive(){
    if(!this.formGroup.valid){
      this.msg = "Pls enter madatory id";
      this.showError = true;
      return ;
    }
    console.log("form ",this.formGroup.value);
    console.log("user id ",this.formGroup.controls["userId"].value);
    console.log("user id ",this.formGroup.get("userId")?.value); 
    debugger;
    
    console.log("test",this.test.value);

    // how to se value in reactive form 
    //this.formGroup.controls["userId"].setValue("ddddd")
    alert(JSON.stringify(this.formGroup.value))
  }
}
