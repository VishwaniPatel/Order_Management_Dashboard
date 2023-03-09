import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { orderData } from 'src/app/dashboard/order.model';

@Injectable()
export class DataTransferService {
  public communicationData: BehaviorSubject<any>;
  public communicationData$: Observable<orderData[]>;
  constructor() {
    this.communicationData = new BehaviorSubject('');
    this.communicationData$ = this.communicationData.asObservable();
  }
}
