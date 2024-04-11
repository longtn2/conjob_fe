export enum CurrencyTypeEnum {
  USD = 'USD',
  ETH = 'ETH',
  BTC = 'BTC',
}

export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  // eslint-disable-next-line
  focused: any;
  background: string;
  isEdit: boolean;
}

export interface FieldInput {
  name: 'email' | 'password' | 'name';
  label: string;
}

export interface Data {
  title: string;
  subTitle1: string;
  fieldInput: FieldInput[];
  subTitle2: string | undefined;
  contentButton: string;
}

export interface DataToogle {
  titleToogle: string;
  subTitleToogle: string;
  buttonToogle: string;
}

export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  name: string;
  email: string;
  password: string;
}

export interface CategoryData {
  key: React.Key;
  name: string;
  description: string;
  count: number;
}
export type TypeActivePanel = 'sign-in' | 'sign-up';

export type Severity = 'success' | 'error' | 'info' | 'warning';

export type Dimension = number | string;
