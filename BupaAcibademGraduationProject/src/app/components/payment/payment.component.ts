import { CardService } from './../../services/card.service';
import { OrderService } from './../../services/order.service';
import { PaymentService } from './../../services/payment.service';
import { Payment } from './../../models/payment';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PolicyForm } from 'src/app/models/policy-form-item';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  policyForms: PolicyForm[] = [];
  cardForm: FormGroup;
  customerId?: number;
  title: string;
  price: number;
  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private toastrService: ToastrService,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.orderService.policyFormData.subscribe((response)=>{
      this.title = response.title
      this.customerId = response.customerId
    });
    this.policyForms = this.orderService.getListOrder();
    this.createCardForm();
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


      this.cardService.addCard(payment).subscribe((response)=>{
        console.log("müşteri kart bilgileri", payment)
        this.policyForms.map(poliycForm =>{
          payment.customerId = this.customerId;
          payment.title = this.title;
          console.log(" ürünler",this.title)
          this.orderService.addOrder(poliycForm)
          .subscribe(response=>{
            this.toastrService.success("Poliçe Alındı.","Başarılı");
            console.log("poliçe form", response)
          })
        })
        this.toastrService.success('Ödeme tamamlandı', 'Başarılı');
      });
    }else{
      this.toastrService.error("Formunuz Hatalı!", "Hata");
    }
  }
}
