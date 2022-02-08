import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';
import { ListResponseModel } from '../responses/list-response-model';
import { ResponseModel } from '../responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getPayments(): Observable<ListResponseModel<Payment>>{
    return this.httpClient.get<ListResponseModel<Payment>>(this.apiUrl + 'payments/getall');
  }
  addPayment(payment : Payment): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'payments/add', payment);
  }
}
