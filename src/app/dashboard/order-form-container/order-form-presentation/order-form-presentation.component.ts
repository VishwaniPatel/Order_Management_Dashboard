import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { orderData } from '../../order.model';
import { OrderFormPresenterService } from '../order-form-presenter/order-form-presenter.service';

@Component({
  selector: 'app-order-form-presentation',
  templateUrl: './order-form-presentation.component.html',
  styleUrls: ['./order-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [OrderFormPresenterService],
})
export class OrderFormPresentationComponent implements OnInit {
  @Output() public submitData: EventEmitter<orderData[]>;
  public profileImage: any;
  public orderForm: FormGroup;
  public isSubmited: boolean;
  public _value: any;
  public base64!: string;
  // public model: NgbDateStruct;
  constructor(
    private orderFormPresenterService: OrderFormPresenterService,
    private chanageDetector: ChangeDetectorRef
  ) {
    this.orderForm = this.orderFormPresenterService.buildForm();
    this.submitData = new EventEmitter();
    this.isSubmited = false;
  }
  ngOnInit(): void {
    /**
     * emiting data through output
     */
    this.orderFormPresenterService.orderForm$.subscribe((res: orderData[]) => {
      // console.log(res);

      this.submitData.emit(res);
    });
  }
  // geter function
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.orderForm.controls;
  }

  /**
   * submit data
   */
  submitForm() {
    this.isSubmited = true;
    this.orderFormPresenterService.saveOrderData(this.orderForm);
    // console.log(this.orderForm);
  }

  onFileSelect(event: any) {
    this.orderFormPresenterService.onSelectFile(event);
    const b = this.orderFormPresenterService.baseString;
    this.orderFormPresenterService.profileImage.subscribe((res) => {
      this.chanageDetector.markForCheck();
      this.base64 = res;
    });
  }
}
