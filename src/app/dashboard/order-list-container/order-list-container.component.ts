import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTransferService } from 'src/app/core/service/data-transfer.service';
import { orderData } from '../order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list-container',
  templateUrl: './order-list-container.component.html',
  styleUrls: ['./order-list-container.component.scss'],
})
export class OrderListContainerComponent implements OnInit {
  public orderData$: Observable<orderData[]>;
  public transferedData: orderData[];
  constructor(
    private orderService: OrderService,
    private dataTransfer: DataTransferService
  ) {
    this.orderData$ = new Observable();
    this.transferedData = [];
  }
  ngOnInit(): void {
    this.orderData$ = this.orderService.getOrderData();
    this.orderData$.subscribe((res) => {
      this.transferedData = res;
      this.dataTransfer.communicationData.next(this.transferedData);
    });
  }
  deleteOrderData(id: number) {
    this.orderService.deleteOrder(id).subscribe((res) => {
      if (res) {
        this.orderData$ = this.orderService.getOrderData();
      }
    });
  }
}
