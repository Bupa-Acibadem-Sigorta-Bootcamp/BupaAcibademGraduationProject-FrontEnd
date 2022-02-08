import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CorporateCustomer } from '../models/corporate-customer';
import { ListResponseModel } from '../responses/list-response-model';
import { ResponseModel } from '../responses/response-model';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  addCorporateCustomer(corporateCustomer : CorporateCustomer): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'corporatecustomers/add', corporateCustomer);
  }
}
