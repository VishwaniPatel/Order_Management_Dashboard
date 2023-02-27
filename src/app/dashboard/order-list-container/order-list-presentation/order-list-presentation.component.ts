import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { orderData } from '../../order.model';
import { OrderListPresenterService } from '../order-list-presenter/order-list-presenter.service';

@Component({
  selector: 'app-order-list-presentation',
  templateUrl: './order-list-presentation.component.html',
  styleUrls: ['./order-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [OrderListPresenterService]
})
export class OrderListPresentationComponent {
  public orderList!: orderData[];

  constructor(private router: Router) {

  }
  /**
     * setter for getting data
     */
  @Input() public set orderData(value: orderData[] | null) {
    if (value) {
      this.orderList = value;
    }
  }
  /**
   * getter for getting data
   */
  public get orderData(): orderData[] {
    return this.orderList;
  }

  openForm() {
    this.router.navigateByUrl('/order-form')
  }
}
