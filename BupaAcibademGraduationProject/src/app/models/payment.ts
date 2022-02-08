export interface Payment {
  id: number;
  customerId?: string;
  cardId?: string;
  paymentDate: string;
  paymentType: string;
  installmentType: string;
}
