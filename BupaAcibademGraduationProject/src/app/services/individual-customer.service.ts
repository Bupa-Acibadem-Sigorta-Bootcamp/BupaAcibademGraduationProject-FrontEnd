import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndividualCustomer } from '../models/individual-customer';
import { ListResponseModel } from '../responses/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<IndividualCustomer>>{
    return this.httpClient.get<ListResponseModel<IndividualCustomer>>(this.apiUrl + 'individualcustomers/getall');
  }
}
