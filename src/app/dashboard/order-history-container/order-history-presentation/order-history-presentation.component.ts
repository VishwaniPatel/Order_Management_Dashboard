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
  constructor(private dataTransferService: DataTransferService) {
    this.orderData = [];
  }

  ngOnInit(): void {
    this.dataTransferService.communicationData$.subscribe(
      (data: orderData[]) => {
        this.orderData = data;
        console.log('Data', this.orderData);
      }
    );
  }
  ngOnChanges(): void {}
}
