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
   path: '../../../assets/ailetamamlayici.png'
  },
  {
    path: '../../../assets/yataraktedavi.jpg'
   },
   {
    path: '../../../assets/sgkplus.png'
   },
   {
    path: '../../../assets/yayla.jpg'
   },
   {
    path: '../../../assets/denizdetedavi.jpg'
   },
   {
     path: '../../../assets/ayakta-tedavi-ve-yatarak-tedavi.jpg'
    },
    {
     path: '../../../assets/yayladatedavi.jpg'
    },
    {
     path: '../../../assets/ormandatedavi.jpg'
    }
]
  getImages(){
   return this.images
  }
  getProducts(){
   this.productService.getProducts().subscribe((response)=>{
      this.products = response.data
    });
  }
}
