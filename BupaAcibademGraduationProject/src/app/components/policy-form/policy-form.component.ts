import { ToastrService } from 'ngx-toastr';
import { OrderService } from './../../services/order.service';
import { PolicyForm } from './../../models/policy-form-item';
import { Product } from './../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss'],
})
export class PolicyFormComponent implements OnInit {
  policyForm: FormGroup;
  selectedPolicy: Product;
  customerId : Customer;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private orderService: OrderService,
    private individualCustomerService: IndividualCustomerService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,

    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.createPolicyForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getProductById(params['id']);
      }
      if (params['id']) {
        this.getCustomerById(params['id']);
      }

    });
  }

  getCustomerById(id: number){
    this.customerService.getCustomerById(id).subscribe((response: any)=>{
      if(response.data){
        this.customerId = response.data as Customer;
      }
    })
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((response: any) => {
      if (response.data) {
        this.selectedPolicy = response.data as Product;
        this.toastrService.success(
          'Poliçenizi Seçtiniz, Form Sayfasına Yönlendiriliyorsunuz!'
        );
      }
    });
  }

  createPolicyForm() {
    this.policyForm = this.formBuilder.group({
      /* Product items */
      /*  id: [''], */

      /* Müşteri ortak items */
     /*  customerId: [''], */
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],

      /* Bireysel Müşteri items */
      identityNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],

      /* Kurumsal Müşteri items */
      /*  companyName: [''],
      taxNumber: [''], */

      /* Olmayan Form items */
      /* address: [''],
      zip: [''], */
    });
  }

  addDtoIndividualCustomer() {
    if (this.policyForm.valid) {
      let product = Object.assign({}, this.policyForm.value);
      product.customerId = this.customerId.id;
      product.productId = this.selectedPolicy.id;
      product.title = this.selectedPolicy.title;
      product.price = this.selectedPolicy.price;
      this.orderService.addToOrder(product);
      this.individualCustomerService
        .addDtoIndividualCustomer(product)
        .subscribe((response) => {
          this.toastrService.success(response.message, 'Başarılı');
        });
      console.log('addtocart', product);
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik!', 'Hata');
    }
  }
}
