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
  {path : "product/policy-form/:id",component: PolicyFormComponent},
  {path : "payment",component: PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
