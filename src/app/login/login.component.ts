import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;
  public isSubmitted: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = new FormGroup('');
    this.isSubmitted = false;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]')]],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')],
      ],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }
}
