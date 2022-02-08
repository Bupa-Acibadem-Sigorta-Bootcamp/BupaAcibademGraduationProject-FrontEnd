import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { ListResponseModel } from '../responses/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Order>>{
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl + 'orders/getall');
  }
}
