import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTransferService } from 'src/app/core/service/data-transfer.service';
import { orderData } from '../../order.model';

@Injectable()
export class OrderHistoryPresenterService {
  public orderList: orderData[];
  constructor(private dataTransferService: DataTransferService) {
    this.orderList = [];
  }
  public getOrderData() {
    this.dataTransferService.communicationData$.subscribe(
      (data: orderData[]) => {
        console.log(data);

        this.orderList = data;
      }
    );
    // return this.orderList;
  }
}
