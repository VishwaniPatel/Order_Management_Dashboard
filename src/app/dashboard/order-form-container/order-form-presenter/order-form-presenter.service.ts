import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { orderData } from '../../order.model';

@Injectable()
export class OrderFormPresenterService {
  private orderForm: Subject<orderData[]>;
  public profileImage: Subject<any>;
  public orderForm$: Observable<orderData[]>;
  public image_file!: File;
  public baseString!: string;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.orderForm = new Subject();
    this.orderForm$ = this.orderForm.asObservable();
    this.profileImage = new Subject();
  }
  /**
   * @returns FormGourp
   */
  public buildForm(): FormGroup {
    return this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.maxLength(25),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      dateNtime: ['', [Validators.required, Validators.maxLength(25)]],
      price: ['', [Validators.required, Validators.maxLength(50)]],
      status: ['', [Validators.required]],
      profileImage: [''],
    });
  }
  /**
   *convert selected file into base64 string
   * @param event to get file path from event
   */
  public onSelectFile(event: any) {
    this.image_file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.image_file);

    fileReader.onload = () => {
      this.baseString = String(fileReader.result);
      this.profileImage.next(this.baseString);
    };
  }
  /**
   * sending form to presentation through subject
   * @param saveForm
   */
  public saveOrderData(saveForm: FormGroup) {
    saveForm.controls['profileImage'].setValue(this.baseString);
    this.orderForm.next(saveForm.value);
    this.router.navigateByUrl('/order-list');
  }
}
