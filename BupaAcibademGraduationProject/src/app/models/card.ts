export interface Card {
  Id: number;
  CustomerId?: number;
  CardHolderFirstNameLastName: string;
  CreditCardNumber: string;
  ValidThru: string;
  CardValidationValue: string;
}
