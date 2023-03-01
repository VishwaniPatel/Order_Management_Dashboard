import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'order-list',
      },
      {
        path: 'order-list',
        component: OrderListContainerComponent,
      },
      {
        path: 'order-form',
        component: OrderFormContainerComponent,
      },
      {
        path: 'edit/:id',
        component: OrderFormContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
