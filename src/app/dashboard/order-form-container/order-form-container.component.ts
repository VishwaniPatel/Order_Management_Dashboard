import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { orderData } from '../order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-form-container',
  templateUrl: './order-form-container.component.html',
  styleUrls: ['./order-form-container.component.scss']
})
export class OrderFormContainerComponent {
  constructor(private orderService: OrderService, private router: ActivatedRoute) {
  }
  addOrder(order: orderData[]) {
    this.orderService.addUserData(order).subscribe((order: orderData[]) => {
      console.log("Data added");

    })
  }
}
