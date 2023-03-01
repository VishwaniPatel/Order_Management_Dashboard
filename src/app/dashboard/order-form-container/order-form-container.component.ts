import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { orderData } from '../order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-form-container',
  templateUrl: './order-form-container.component.html',
  styleUrls: ['./order-form-container.component.scss'],
})
export class OrderFormContainerComponent implements OnInit {
  public id: number;
  public editOrder$!: Observable<orderData>;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.id) {
      this.editOrder$ = this.orderService.getOrderById(this.id);
    }
  }
  addOrder(order: orderData) {
    this.orderService.addOrderData(order).subscribe((res) => {
      this.router.navigateByUrl('/dashboard/order-list');
    });
  }

  editOrder(order: orderData) {
    this.orderService.editeOrder(order, this.id).subscribe((res) => {
      this.router.navigateByUrl('/dashboard/order-list');
    });
  }
}
