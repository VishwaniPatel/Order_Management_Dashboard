import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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
export class OrderFormPresentationComponent implements OnInit, OnChanges {
  @Input() patchData: any;
  @Input() public set editOrder(value: orderData[] | null) {
    if (value) {
      this.orderForm.patchValue(value);
      this.value = value;
    }
  }
  @Output() public submitData: EventEmitter<orderData[]>;
  @Output() public editData: EventEmitter<orderData[]>;
  public profileImage: any;
  public orderForm: FormGroup;
  public isSubmited: boolean;
  public value: any;
  public base64!: string;
  // public model: NgbDateStruct;
  constructor(
    private orderFormPresenterService: OrderFormPresenterService,
    private chanageDetector: ChangeDetectorRef
  ) {
    this.orderForm = this.orderFormPresenterService.buildForm();
    this.submitData = new EventEmitter();
    this.editData = new EventEmitter();
    this.isSubmited = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.patchData);
    this.orderForm.patchValue(this.patchData);
  }
  ngOnInit(): void {
    /**
     * emiting data through output
     */
    this.orderFormPresenterService.orderForm$.subscribe((res: orderData[]) => {
      // console.log(res);
      if (this.value) {
        this.editData.emit(res);
      } else {
        this.submitData.emit(res);
      }
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
