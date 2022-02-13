import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import { GeneralDirectorateScreenComponent } from './components/general-directorate-screen/general-directorate-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path : "", pathMatch : "full", component : ProductComponent},
  {path : "products/getall",component: ProductComponent},
  {path : "generalDirectorateScreen/list",component: GeneralDirectorateScreenComponent},
  {path : "product/:id",component: PolicyFormComponent},
  {path : "product/:id/policy-form",component: PolicyFormComponent},
  {path : "product/:id/policy-form/order/payment",component: PaymentComponent},
  {path : "order",component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
