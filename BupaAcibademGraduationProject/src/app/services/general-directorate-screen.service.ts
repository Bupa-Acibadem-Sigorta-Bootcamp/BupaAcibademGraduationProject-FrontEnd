import { DtoGeneralManagerScreen } from './../models/dto-general-manager-screen';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../responses/list-response-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralDirectorateScreenService {
  apiUrl = environment.bupaAcibademGraduationUrl;
  constructor(private httpClient: HttpClient) {}

  getManagerScreens(): Observable<ListResponseModel<DtoGeneralManagerScreen>>{
    return this.httpClient.get<ListResponseModel<DtoGeneralManagerScreen>>(this.apiUrl + 'orders/getallmanagerscreens');
  }
}
