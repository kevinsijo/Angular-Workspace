import { Component} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { HttpserviceService } from "../services/httpservice.service";

@Component({
   selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css'],
  providers: [HttpserviceService]
})
export class DatadrivenComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpserviceService) {
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
  
  checkGet(){
    console.log("INSIDE");
    this.http.getData()
      .subscribe(
            (data) => console.log(data)
      );
  }
  
  onSubmit() {
    var password = this.myForm.controls['password'].value;
    var username = this.myForm.controls['userData'].value.username;
    var email = this.myForm.controls['userData'].value.email;
    console.log(password+' | '+username+' | '+email);
    this.http.postData({username: username, password : password, email: email})
      .subscribe(
        (data) => console.log(data)
      );
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
