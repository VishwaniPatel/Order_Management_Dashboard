import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { orderData } from '../order.model';
import { OrderHistoryPresenterService } from './order-history-presenter/order-history-presenter.service';

@Component({
  selector: 'app-order-history-container',
  templateUrl: './order-history-container.component.html',
  styleUrls: ['./order-history-container.component.scss'],
})
export class OrderHistoryContainerComponent implements OnInit {
  // public orderData$: Observable<orderData[]>;

  constructor() {
    // this.orderData$ = new Observable();
    // console.log(orderData);
  }
  ngOnInit(): void {
    // this.orderData$ = this.orderHistoryPresenterService.getOrderData();
  }
}
