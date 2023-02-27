import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderData } from '../order.model';

@Injectable()
export class OrderService {

  public baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/orders/";
  }
  /**
    * get order all data
    */
  getOrderData(): Observable<orderData[]> {
    const url: string = this.baseUrl;
    return this.httpClient.get<orderData[]>(url);
  }
  /**
   * post order data
   */
  addUserData(order: orderData[]): Observable<orderData[]> {
    const url: string = this.baseUrl;
    return this.httpClient.post<orderData[]>(url, order);
  }
  /**
   * edit order data by id
   * @param order
   * @param id
   * @returns order
   */
  public editeOrder(order: orderData[], id: number): Observable<orderData[]> {
    const url: string = this.baseUrl + id;
    return this.httpClient.put<orderData[]>(url, order)
  }

  /**
   * delete order by id
   * @param id
   * @returns order[]
   */
  public deleteOrder(id: number): Observable<orderData[]> {
    const url: string = this.baseUrl + id;
    return this.httpClient.delete<orderData[]>(url);
  }
}
