import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../responses/list-response-model';
import { ResponseModel } from '../responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl + 'customers/getall');
  }
  addCustomer(customer : Customer): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'customers/add', customer);
  }
  getCustomerById(id : number): Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl + 'customers/find?id=' + id);
  }
}
