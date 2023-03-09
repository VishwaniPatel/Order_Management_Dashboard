import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTransferService } from 'src/app/core/service/data-transfer.service';
import { orderData } from '../../order.model';
import { OrderHistoryPresenterService } from '../order-history-presenter/order-history-presenter.service';

@Component({
  selector: 'app-order-history-presentation',
  templateUrl: './order-history-presentation.component.html',
  styleUrls: ['./order-history-presentation.component.scss'],
})
export class OrderHistoryPresentationComponent implements OnChanges, OnInit {
  public orderData: orderData[];
  public total: number;
  public totalSale: number;
  public totalDelivery: number;

  constructor(private dataTransferService: DataTransferService) {
    this.orderData = [];
    this.total = 0;
    this.totalSale = 0;
    this.totalDelivery = 0;
  }

  ngOnInit(): void {
    this.dataTransferService.communicationData$.subscribe(
      (data: orderData[]) => {
        this.orderData = data;
        console.log(this.orderData);
      }
    );
    this.total = this.orderData.length;
    for (let i = 0; i < this.orderData.length; i++) {
      let price = this.orderData[i].price;
      this.totalSale = this.totalSale + price;
    }
    const totalDelivery = this.orderData.filter((res) => {
      return res.status == 'Completed';
    });
    this.totalDelivery = totalDelivery.length;
  }
  ngOnChanges(): void {}
}
