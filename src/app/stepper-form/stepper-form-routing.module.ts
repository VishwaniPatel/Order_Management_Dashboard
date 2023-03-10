import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StepperFormComponent } from './stepper-form.component';

const routes: Routes = [{ path: '', component: StepperFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class StepperFormRoutingModule {}
