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

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss'],
})
export class PolicyFormComponent implements OnInit {
  policyForm: FormGroup;
  selectedPolicy: Product;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private orderService: OrderService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.createPolicyForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getProductById(params['id']);
      }
    });
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
      id: [''],

      /* Müşteri ortak items */
      customerId: [''],
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
      companyName: ['', Validators.required],
      taxNumber: ['', Validators.required],

      /* Olmayan Form items */
      address: [''],
      zip: [''],
    });
  }

  addToOrder() {
    if (this.policyForm.valid) {
      let product = Object.assign({}, this.policyForm.value);
      product.title = this.selectedPolicy.title;
      product.price = this.selectedPolicy.price;
      this.orderService.addToOrder(product);
      console.log('addtocart', product);
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik!', 'Hata');
    }
  }
}
