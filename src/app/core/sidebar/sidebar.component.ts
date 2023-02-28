import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private router: Router) {}
  openLiveOrders() {
    this.router.navigateByUrl('/order-list');
  }
  addNewOrder() {
    this.router.navigateByUrl('/order-form');
  }
}
