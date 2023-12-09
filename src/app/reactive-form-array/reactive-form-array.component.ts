import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.scss']
})
export class ReactiveFormArrayComponent {

  formGroup!: FormGroup

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["name222", [Validators.required, Validators.minLength(4)]],
      class: [null, [Validators.required, Validators.maxLength(8)]],
      skills:
        this.fb.array([
          this.fb.group({
            tech1: ["entee skil"],
            exp: ["0"]
          })
        ])

    });

  }


  onLoginReactive() {
    this.formGroup.controls["dd"] as FormArray
    alert(JSON.stringify(this.formGroup.value))
  }

  skills(): FormArray {
    return this.formGroup.get("skills") as FormArray
  }

  addSkils() {
    this.skills().push(this.fb.group({
      tech1: ["entee skil"],
      exp: ["0"]
    }));
  }
  remove(i:number){
    this.skills().removeAt(i)
  }
}
