import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ListResponseModel } from '../responses/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Card>>{
    return this.httpClient.get<ListResponseModel<Card>>(this.apiUrl + 'cards/getall');
  }
}
