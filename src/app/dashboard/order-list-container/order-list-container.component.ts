import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { orderData } from '../order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list-container',
  templateUrl: './order-list-container.component.html',
  styleUrls: ['./order-list-container.component.scss'],
})
export class OrderListContainerComponent implements OnInit {
  public orderData$: Observable<orderData[]>;
  constructor(private orderService: OrderService) {
    this.orderData$ = new Observable();
  }
  ngOnInit(): void {
    this.orderData$ = this.orderService.getOrderData();
  }
  deleteOrderData(id: number) {
    this.orderService.deleteOrder(id).subscribe((res) => {
      if (res) {
        this.orderData$ = this.orderService.getOrderData();
      }
    });
  }
}
