import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Output('onSubmit') onSubmitParent = new EventEmitter();

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    info: new FormControl('', []),
  });

  get name() {
    return this.formGroup.get('name')!;
  }
  get lastname() {
    return this.formGroup.get('lastname')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  get phone() {
    return this.formGroup.get('phone')!;
  }
  get info() {
    return this.formGroup.get('info')!;
  }
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.formGroup.valid) return;
    const { name, lastname } = this.formGroup.value;

    this.onSubmitParent.emit(`${name} ${lastname}`);
  }
}
