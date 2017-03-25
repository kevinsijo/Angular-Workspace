import { Component} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
   selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['', [Validators.required]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],

    });
    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
  onSubmit() {
    console.log('Success');

  }
  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({'invalid': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;

  }
  reset(){
    this.myForm.reset();
  }
}
