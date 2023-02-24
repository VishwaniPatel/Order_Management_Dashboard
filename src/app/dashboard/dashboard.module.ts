import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderFormPresentationComponent } from './order-form-container/order-form-presentation/order-form-presentation.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderListPresentationComponent } from './order-list-container/order-list-presentation/order-list-presentation.component';



@NgModule({
  declarations: [
    OrderFormContainerComponent,
    OrderFormPresentationComponent,
    OrderListContainerComponent,
    OrderListPresentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
