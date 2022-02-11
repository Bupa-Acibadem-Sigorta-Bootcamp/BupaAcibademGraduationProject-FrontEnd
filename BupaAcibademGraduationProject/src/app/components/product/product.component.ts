import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  //#region Poliçe görselleri
  images = [
    {
      path: '../../../assets/ailetamamlayici.png',
    },
    {
      path: '../../../assets/yataraktedavi.jpg',
    },
    {
      path: '../../../assets/sgkplus.png',
    },
    {
      path: '../../../assets/yayla.jpg',
    },
    {
      path: '../../../assets/denizdetedavi.jpg',
    },
    {
      path: '../../../assets/ayakta-tedavi-ve-yatarak-tedavi.jpg',
    },
    {
      path: '../../../assets/yayladatedavi.jpg',
    },
    {
      path: '../../../assets/ormandatedavi.jpg',
    },
  ];
  //#endregion

  getImages() {
    return this.images;
  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      if ((this.products = response.data)) {
        this.toastrService.success(response.message, 'Başarılı');
      } else {
        this.toastrService.error(response.message, 'Hata!');
      }
    });
  }
  addToOrder(product: Product) {
    this.productService.getProducts().subscribe((response) => {
      this.routerService.navigate(['product/policy-form/' + product.id]);
    });
    console.log(product);
  }
}
