import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperFormRoutingModule } from './stepper-form-routing.module';
import { StepperFormComponent } from './stepper-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StepperFormComponent],
  imports: [CommonModule, StepperFormRoutingModule, ReactiveFormsModule],
})
export class StepperFormModule {}
