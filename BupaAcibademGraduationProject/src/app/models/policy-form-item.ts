export class PolicyForm {
  /* Ortak item */
  id: number;

  /* Product items */
  title: string;
  price?: number;

  /* Müşteri ortak items */
  customerId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  city: string;
  email: string;

  /* Bireysel Müşteri items */
  identityNumber: string;
  dateOfBirth: string;
  gender: string;

  /* Kurumsal Müşteri items */
  companyName: string;
  taxNumber: string;
  orderDate: string;
}
export class ForProductTitle{
  productId:number;
  title: string;
  customerId: number;
}
