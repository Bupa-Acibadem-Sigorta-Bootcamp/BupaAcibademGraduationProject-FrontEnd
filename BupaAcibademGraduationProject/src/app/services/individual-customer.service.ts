import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndividualCustomer } from '../models/individual-customer';
import { PolicyForm } from '../models/policy-form-item';
import { ListResponseModel } from '../responses/list-response-model';
import { ResponseModel } from '../responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getIndividualCustomers(): Observable<ListResponseModel<IndividualCustomer>>{
    return this.httpClient.get<ListResponseModel<IndividualCustomer>>(this.apiUrl + 'individualcustomers/getall');
  }

  addIndividualCustomer(individualCustomer : IndividualCustomer): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'individualcustomers/add', individualCustomer);
  }
  addDtoIndividualCustomer(policyForm : PolicyForm): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'individualcustomers/AddDetailIndividualCustomer', policyForm);
  }
}
