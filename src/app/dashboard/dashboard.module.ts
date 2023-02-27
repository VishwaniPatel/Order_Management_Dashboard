import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderFormPresentationComponent } from './order-form-container/order-form-presentation/order-form-presentation.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderListPresentationComponent } from './order-list-container/order-list-presentation/order-list-presentation.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './service/order.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    OrderFormContainerComponent,
    OrderFormPresentationComponent,
    OrderListContainerComponent,
    OrderListPresentationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],

  providers: [OrderService],
})
export class DashboardModule {}
