export interface Card {
  id: number;
  customerId?: number;
  cardHolderFirstNameLastName: string;
  creditCardNumber: string;
  validThru: string;
  cardValidationValue: string;
}
