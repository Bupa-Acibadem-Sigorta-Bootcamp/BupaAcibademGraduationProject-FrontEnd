import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  images =[
  {
   'path': '../../../assets/ailetamamlayici.png'
  },
  /* {
    'path': '../../../assets/hamile.png'
   },
   {
    'path': '../../../assets/sgkplus.png'
   },
   {
    'path': '../../../assets/yayla.jpg'
   } */
]
  getImages(){
    return this.images;
  }
  getProducts(){
   this.productService.getProducts().subscribe((response)=>{
      this.products = response.data
    });
  }
}
