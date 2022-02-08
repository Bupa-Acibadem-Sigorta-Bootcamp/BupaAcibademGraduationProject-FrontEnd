import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CorporateCustomer } from '../models/corporate-customer';
import { ListResponseModel } from '../responses/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<CorporateCustomer>>{
    return this.httpClient.get<ListResponseModel<CorporateCustomer>>(this.apiUrl + 'corporatecustomers/getall');
  }
}
