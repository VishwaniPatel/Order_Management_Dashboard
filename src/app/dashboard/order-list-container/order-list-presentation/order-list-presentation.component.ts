import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTransferService } from 'src/app/core/service/data-transfer.service';
import { orderData } from '../../order.model';
import { OrderListPresenterService } from '../order-list-presenter/order-list-presenter.service';

@Component({
  selector: 'app-order-list-presentation',
  templateUrl: './order-list-presentation.component.html',
  styleUrls: ['./order-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [OrderListPresenterService],
})
export class OrderListPresentationComponent implements OnInit, OnChanges {
  public orderList: orderData[];
  public total: number;
  public filterData: any;
  public pending: number;
  public dispatch: number;
  public searchText!: string;
  public columns: string[];
  public sortedColumn!: string;
  @Output() public deleteOrder: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private router: Router, private modalService: NgbModal) {
    this.total = 0;
    this.orderList = [];
    this.pending = 0;
    this.dispatch = 0;
    this.columns = [];
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.columns = Object.keys(this.orderList[0]);
    console.log(this.columns);

    this.total = this.orderList.length;
    const pendingData = this.orderList.filter((res) => {
      return res.status == 'Pending';
    });
    this.pending = pendingData.length;
    const dispatchData = this.orderList.filter((res) => {
      return res.status == 'Dispatch';
    });
    this.dispatch = dispatchData.length;
  }
  /**
   * setter for getting data
   */
  @Input() public set orderData(value: orderData[] | null) {
    if (value) {
      this.orderList = value;
      this.filterData = this.orderList;
      // this.orderList = this.filterData;/
    }
  }
  /**
   * getter for getting data
   */
  public get orderData(): orderData[] {
    return this.orderList;
  }

  openForm() {
    this.router.navigateByUrl('/dashboard/order-form');
  }
  onEdit(id: number) {
    this.router.navigateByUrl(`/dashboard/edit/${id}`);
  }
  onDelete(id: number) {
    this.deleteOrder.emit(id);
    this.modalService.dismissAll();
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  onFilter(id: number) {
    if (id == 0) {
      this.orderList = this.filterData;
    }
    if (id == 1) {
      this.orderList = this.filterData.filter((res: any) => {
        return res.status == 'Pending';
      });
    }
    if (id == 2) {
      this.orderList = this.filterData.filter((res: any) => {
        return res.status == 'Dispatch';
      });
    }
    if (id == 3) {
      this.orderList = this.filterData.filter((res: any) => {
        return res.status == 'Completed';
      });
    }
  }
  sortByName(name: string) {
    this.sortedColumn = name;
  }
}
