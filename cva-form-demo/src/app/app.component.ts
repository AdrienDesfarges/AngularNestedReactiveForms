import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cva-form-demo';
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control('', Validators.required),
      surname: fb.control('', Validators.required),
      address: fb.control(''),
    });
  }

  log(x: FormGroup) {
    console.log(x);
  }
}
