import { Button, Slider, TableColumnsType } from 'antd';
import {
  CategoryData,
  Data,
  DataToogle,
  ProfileAdminType
} from '@/interfaces/interfaces';
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNOUT = 'SIGNOUT';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
export const SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';
export const SIGNIN_WITH_GITHUB = 'SIGNIN_WITH_GITHUB';
export const ON_AUTHSTATE_CHANGED = 'ON_AUTHSTATE_CHANGED';
export const SET_AUTH_PERSISTENCE = 'SET_AUTH_PERSISTENCE';
export const ON_AUTHSTATE_SUCCESS = 'ON_AUTHSTATE_SUCCESS';
export const ON_AUTHSTATE_FAIL = 'ON_AUTHSTATE_FAIL';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const SET_PROFILE = 'SET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const LOADING = 'LOADING';
export const IS_AUTHENTICATING = 'IS_AUTHENTICATING';
export const SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';

export const START_LOADING = 'START_LOADING';
export const FETCH_LOADING = 'FETCH_LOADING';

export const dataSignIn: Data = {
  title: 'Sign In',
  subTitle1: 'or use your email password',
  fieldInput: [
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Password' }
  ],
  subTitle2: 'Forget Your Password',
  contentButton: 'Sign In'
};

export const dataSignUp: Data = {
  title: 'Create Account',
  subTitle1: 'or use your email for register action',
  fieldInput: [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Password' }
  ],
  subTitle2: undefined,
  contentButton: 'Create Register'
};

export const dataToogleSignIn: DataToogle = {
  titleToogle: 'Hello, Friend!',
  subTitleToogle: 'Enter your Personal details to use all of site feature',
  buttonToogle: 'Sign In'
};

export const dataToogleSignUp: DataToogle = {
  titleToogle: 'Welcome Back!',
  subTitleToogle: 'Enter your Personal details to use all of site feature',
  buttonToogle: 'Sign Up'
};

export const SIGN_IN = 'sign-in';
export const SIGN_UP = 'sign-up';

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    editable: true
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    editable: true
  },
  {
    title: 'Slug',
    dataIndex: 'slug',
    key: 'slug',
    editable: true
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count'
  }
];

export const COLOR = 'linear-gradient(180deg, #C5091F 0%, #870413 100%)';

export const pathUrlRouter = {
  LOGIN: '/login',
  HOME: '/',
  POST: '/post',
  CATEGORY: '/category',
  HISTORY_VIDEO: '/history',
  PROFILE: '/profile'
};

export const pathUrlAuthApi = {
  LOGIN: 'api/v1/auth/login',
  LOGOUT: 'api/v1/auth/logout',
  REFRESH_TOKEN: 'api/v1/auth/refresh'
};

export const pathUrlProfileApi = {
  GET_PROFILE: 'api/v1/user/profile',
  POST_PROFILE_IMAGE: 'api/v1/user/upload=avatar',
  POST_PROFILE_CHANGE: 'api/v1/user/update-profile'
};

export const pathUrlHistoryApi = {
  GET_HISTORY_POST: 'api/v1/admin/post',
  GET_FILTER_POST: 'api/v1/admin/filter'
};

export const constantCookies = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken'
};

export const uploadStatusFile = {
  DONE: 'done',
  UPLOADING: 'uploading',
  ERROR: 'error'
};

export const RESPONSE_SUCCESS = 'success';
export const RESPONSE_ERROR = 'error';

export const REGEX_BASE_64 =
  /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

export const TYPE_JPEG = 'image/jpeg';
export const TYPE_PNG = 'image/png';

export const OPTIONS_GENDER = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

export const profileAdminData: ProfileAdminType = {
  name: 'John Doe',
  address: '123 Main Street',
  avatar: 'https://example.com/avatar.png',
  first_name: 'John',
  last_name: 'Doe',
  phone_number: '123-456-7890',
  roles: [
    { role_id: 1, role_name: 'Admin' },
    { role_id: 2, role_name: 'Editor' }
  ],
  gender: 'Male',
  dob: '1990-01-01',
  email: 'johndoe@example.com'
};

export const STATUS_CENSOR = [
  { value: 'accept', label: 'Đã duyệt' },
  { value: 'deleted', label: 'Đã xóa' },
  { value: 'not_yet_approved', label: 'Chưa duyệt' }
];

export const ORDER_BY_POST = [
  { value: 'desc', label: 'DESC' },
  { value: 'asc', label: 'ASC' }
];

export const PER_PAGE_CENSOR_HISTORY = 4;

export const formatDate = {
  DATE_TIME_SECONDS: 'DD-MM-YYYY HH:mm:ss',
  DATE_TIME: 'DD-MM-YYYY HH:mm',
  DATE: 'DD-MM-YYYY',
  TIME: 'HH:mm',
  TIME_SECONDS: 'HH:mm:ss'
};

export const PATH_URL_POST_API = {
  delete: 'api/v1/admin/post/delete',
  active: 'api/v1/admin/post/active',
  allpost: 'api/v1/admin/post'
};


export const SIGHTENGINE = {
  workflow: 'wfl_g5IE1sK45fvgtphGpahhV',
  api_user: '268568153',
  api_secret: 'Rqcp8zjVp4tcwjoygwfEmUwWuqiipqrk'
};

export const URL_IMG_API_SIGHTENGINE =
  'https://api.sightengine.com/1.0/check-workflow.json';

export const URL_VIDEO_API_SIGHTENGINE =
  'https://api.sightengine.com/1.0/video/check-workflow-sync.json';
