import { responseModel } from './response-model';

export interface SingleResponseModel<T> extends responseModel {
  data: T;
}
