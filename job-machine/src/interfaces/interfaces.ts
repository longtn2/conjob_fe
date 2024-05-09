import { Post, PostStatus } from '@/api/mock/news.api';
import dayjs from 'dayjs';

export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
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

export type ColorProperty = 'success' | 'error' | 'warning' | 'default';
export interface ApiResponse {
  status_code: number;
  data: ResponseDataPost;
}
// export interface ResponseDataPost {
//   currentPage: number;
//   totalPages: number;
//   pageSize: number;
//   totalCount: number;
//   items: InforPost[];
//   map(arg0: (post: Post, key: number) => JSX.Element): React.ReactNode;
//   length: number;
//   responType?: string;
//   message?: string;
// }
// export interface InforPost {
//   status: any;
//   date: string;
//   id: number;
//   title?: string;
//   caption?: string;
//   author?: string;
//   file_type?: string;
//   file_name?: string;
//   file_url?: string;
//   created_at?: Date;
//   like?: number;
//   centersor: PostStatus;
// }

export interface FormFilterPost {
  search_term: string;
  page: number;
  limit: number;
  orderBy: string;
  status_filter: string;
}
export interface SearchParams {
  Page?: number;
  Limit?: number;
  search_term?: string;
  status_filter?: string;
}
export interface IQuery {
  end_date: string;
  start_date: string;
  page: number;
  limit: number;
  title: string;
}

export interface ICheckbox {
  onCheckboxChange?: (id: string, isChecked: boolean) => void;
  postId?: string;
}

export enum CurrencyTypeEnum {
  USD = 'USD',
  ETH = 'ETH',
  BTC = 'BTC'
}

export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
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
export interface ResponseDataPost {
  data: ResponseDataPostAPI;
  status_code: number;
}

export interface ResponseDataPostAPI {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  items: InforPost[];
  map(arg0: (post: Post, key: number) => JSX.Element): React.ReactNode;
  length: number;
  responType?: string;
  message?: string;
}
export interface InforPost {
  data: any;
  status: string;
  title?: string;
  date: string;
  id: number;
  caption?: string;
  author?: string;
  job_type?: string;
  job_title?: string;
  avatar_author?: string;
  file_type?: string;
  file_name?: string;
  file_url?: string;
  created_at?: string;
  statusPost: string;
  is_deleted: boolean;
  is_actived: boolean;
  like?: number;
  centersor: PostStatus;
}
export interface ProfileAdminType {
  name?: string;
  address?: string;
  avatar?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  roles?: RoleType[];
  gender?: string;
  dob?: string;
  email?: string;
}

export type MessageStatusType = 'success' | 'error';
export type RoleType = {
  role_id: number;
  role_name: string;
};

export interface BaseMessageProps {
  status: MessageStatusType;
  message: string;
}

export type ModeTheme = 'light' | 'dark';

export type FilterType =
  | 'is_deleted'
  | 'is_actived'
  | 'not_yet_approved'
  | undefined;

export interface ParamsPostVideo {
  search_term?: string;
  Page?: number;
  Limit?: number;
  OrderBy?: string;
  start_date?: string;
  end_date?: string;
  status_filter?: FilterType;
}

export interface DatesInterfaces {
  start_date: dayjs.Dayjs;
  end_date: dayjs.Dayjs;
}

export interface DateErrors {
  start_date: string;
  end_date: string;
}

export interface HistoryVideoFormValues {
  dates?: {
    start_date: dayjs.Dayjs | null;
    end_date: dayjs.Dayjs | null;
  };
  id_content?: string;
  name_author?: string;
  id_censor?: string;
  status_censor?: FilterType;
}

export interface DatesSchemaInterfaces {
  start_date?: string;
  end_date?: string;
}

export interface valueGetUrlS3 {
  file_name: string;
  file_type: string;
}

export type ValueSelectFlags = 'vi' | 'en' | 'jp';

export interface SelectFlags {
  value: ValueSelectFlags;
  label: string;
  flag: string;
}
export interface RangePickerType {
  titleContent?: string;
  dataRange: {
    startDate?: Date;
    endDate?: Date;
  };
}
