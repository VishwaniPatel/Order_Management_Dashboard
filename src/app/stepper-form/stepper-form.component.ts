import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss'],
})
export class StepperFormComponent implements OnInit {
  public submitted = false;
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  setPassword!: FormGroup;
  submitDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  step = 1;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      reTypePassword: ['', Validators.required],
    });
    // this.addressDetails = this.formBuilder.group({
    //   city: ['', Validators.required],
    //   address: ['', Validators.required],
    //   pincode: ['', Validators.required],
    // });
    // this.setPassword = this.formBuilder.group({

    //   password: ['', Validators.required],
    //   reTypePassword: ['', Validators.required],
    // });
  }
  get f() {
    return this.personalDetails.controls;
  }
  onSubmit() {}
}
