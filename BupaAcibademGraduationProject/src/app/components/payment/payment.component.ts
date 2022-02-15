import { PolicyForm } from './../../models/policy-form-item';
import { CardService } from './../../services/card.service';
import { OrderService } from './../../services/order.service';
import { PaymentService } from './../../services/payment.service';
import { Payment } from './../../models/payment';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  policyForms: PolicyForm[] = [];
  customers: Customer[] = [];
  cardForm: FormGroup;
  customerId: number;
  title: string;
  price: number;
  productId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private cardService: CardService,
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.createCardForm();
    this.getListOrder();
  }

  createCardForm() {
    this.cardForm = this.formBuilder.group({
      cardHolderFirstNameLastName: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      validThru: ['', Validators.required],
      cardValidationValue: ['', Validators.required],
    });
  }

  addPayment() {
    if (this.cardForm.valid) {
      let payment = Object.assign({}, this.cardForm.value);
      this.cardService.addCard(payment).subscribe((response) => {
        console.log('müşteri kart bilgileri', payment);
        this.toastrService.success('Ödeme tamamlandı', 'Başarılı');
      });

      this.policyForms.map((order) => {
        this.orderService.policyFormData.subscribe((response: any) => {
          this.policyForms = response[0].id = this.orderService.getListOrder();
          order.id = response.productId;
          order.customerId = response.CustomerId;
        });
        this.orderService.addOrder(order).subscribe((response) => {
          this.toastrService.info('Poliçe Eklendi', 'Başarılı');
        });
      });
    } else {
      this.toastrService.error('Formunuz Hatalı!', 'Hata');
    }
  }

  getListOrder() {
    this.orderService.policyFormData.subscribe((response) => {
      this.policyForms = this.orderService.getListOrder();
    });
  }
}
