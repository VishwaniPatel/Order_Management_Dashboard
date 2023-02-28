import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public editOrder$!: Observable<orderData[]>;
  public editData: any;

  constructor(
    private orderService: OrderService,
    private activatedRouter: ActivatedRoute
  ) {
    this.id = this.activatedRouter.snapshot.params['id'];
    console.log(this.id);
  }
  ngOnInit(): void {
    // this.editOrder$ = this.orderService.getOrderById(this.id);
    this.getOrderById();
    // console.log(this.editOrder$);
  }
  addOrder(order: orderData[]) {
    this.orderService.addUserData(order).subscribe((order: orderData[]) => {
      console.log('Data added');
    });
  }
  // editOrder() {
  //   this.editData = this.orderService.editeOrder(this.id);
  // }
  getOrderById() {
    this.orderService.getOrderById(this.id).subscribe((res) => {
      this.editData = res;
    });
  }
}
