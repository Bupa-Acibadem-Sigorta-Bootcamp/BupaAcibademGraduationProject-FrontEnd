export interface Card {
  d: number;
  customerId?: number;
  cardHolderFirstNameLastName: string;
  creditCardNumber: string;
  validThru: string;
  cardValidationValue: string;
}
