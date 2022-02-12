import { OrderService } from './../../services/order.service';
import { PolicyForm } from 'src/app/models/policy-form-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  policyForms: PolicyForm[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getListOrder();
  }
  getListOrder() {
    this.policyForms = this.orderService.getListOrder();
    console.log(this.policyForms);
  }
}
