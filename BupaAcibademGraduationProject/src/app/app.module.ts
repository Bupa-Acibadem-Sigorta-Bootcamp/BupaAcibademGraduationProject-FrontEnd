import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardComponent } from './components/card/card.component';
import { CorporateCustomerComponent } from './components/corporate-customer/corporate-customer.component';
import { IndividualCustomerComponent } from './components/individual-customer/individual-customer.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeSlideComponent } from './components/home-slide/home-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PaymentComponent,
    OrderComponent,
    CustomerComponent,
    CardComponent,
    CorporateCustomerComponent,
    IndividualCustomerComponent,
    FooterBarComponent,
    NavigationBarComponent,
    HomeSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
