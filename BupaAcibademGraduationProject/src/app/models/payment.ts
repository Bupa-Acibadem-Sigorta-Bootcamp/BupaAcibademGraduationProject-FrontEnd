export interface Payment {
  Id: number;
  CustomerId?: string;
  CardId?: string;
  PaymentDate: string;
  PaymentType: string;
  InstallmentType: string;
}
