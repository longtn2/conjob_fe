import { useEffect, useState, useTransition } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Typography, Form, Input, Row, Col } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import FormIcon from './FormIcon';
import { ContainerForm } from './FormContainer.styled';
import { WrapperFormItem } from './WrapperFormItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
  Data,
  FormLoginType,
  FormRegisterType,
  TypeActivePanel
} from '@/interfaces/interfaces';
import { schemaLogin, schemaRegister } from '@/utils/yup';
import {
  RESPONSE_ERROR,
  RESPONSE_SUCCESS,
  SIGN_IN,
  dataSignIn,
  dataSignUp,
  pathUrlRouter
} from '@/constants/constants';
import { AuthApi } from '@/api/auth/AuthApi';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { getMessageStatus } from '@/helper';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '@/components/common/SelectFlag/LanguageSelectFlag';
import { loginRequest } from '@/redux/actions/authAction';
import { AppDispatch, RootState } from '@/redux/store';

const { Title } = Typography;

type FormContainerProps = {
  state: TypeActivePanel;
};

const FormContainer = ({ state }: FormContainerProps) => {
  const [formData, setFormData] = useState<Data>(dataSignIn);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state);
  const error = useSelector((state: RootState) => console.log(state));
  const { handleSubmit, control, reset } = useForm<
    FormLoginType | FormRegisterType
  >({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver<FormLoginType | FormRegisterType>(
      state === SIGN_IN ? schemaLogin : schemaRegister
    )
  });
  let timeoutId: NodeJS.Timeout;

  function returnData(): Promise<Data> {
    return new Promise(resolve => {
      timeoutId = setTimeout(() => {
        resolve(state === 'sign-in' ? dataSignIn : dataSignUp);
      }, 300);
    });
  }

  useEffect(() => {
    returnData().then(data => {
      setFormData(data);
    });
    reset();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [state]);

  const handleSubmitForm = async (values: FormRegisterType | FormLoginType) => {
    if (state === 'sign-in') {
      const { email, password } = values;
      const valuesLogin = {
        email: email,
        password: password
      };
      await AuthApi.apiLogin(valuesLogin)
        .then((res: any) => {
          Cookies.set('token', res.data.token);
          Cookies.set('refreshToken', res.data.refreshToken);
          localStorage.setItem('firstName', res.data.first_name);
          localStorage.setItem('lastName', res.data.last_name);
          localStorage.setItem('avatar', res.data.avatar);
          navigate(pathUrlRouter.PROFILE);
          getMessageStatus('Login Success', RESPONSE_SUCCESS);
        })
        .catch(err => {
          getMessageStatus(err.message, RESPONSE_ERROR);
        })
        .finally(() => {
          // setLoading(false);
        });
    }
  };

  const handleLogin = (values: { email: string; password: string }) => {
    const action: any = loginRequest(values);
    dispatch(action);
  };
  console.log('Đây là lỗi của tôi: ', loading);
  return (
    <ContainerForm className={`${state}`}>
      <Form onFinish={handleSubmit(handleLogin)}>
        <div>
          <Row gutter={[32, 32]} justify="center">
            <Col span={24}>
              <Title level={1} style={{ textAlign: 'center' }}>
                {t('pages.auth.title')}
              </Title>
            </Col>
            <Col span={24}>
              {formData.fieldInput.map(value => (
                <Controller
                  key={value.name}
                  name={value?.name}
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <Form.Item
                        validateStatus={fieldState.error?.message && 'error'}
                        help={fieldState.error?.message || null}
                        style={{ padding: 0, width: '20rem' }}
                      >
                        {value.name === 'password' ? (
                          <Input.Password
                            {...field}
                            placeholder={value.label}
                          />
                        ) : (
                          <Input {...field} placeholder={value.label} />
                        )}
                      </Form.Item>
                    );
                  }}
                />
              ))}
            </Col>
            <Col
              span={24}
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginLeft: '-20px'
              }}
            >
              <LanguageSelect />
            </Col>
            <Col
              span={24}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <BaseButton
                htmlType="submit"
                className="ant-btn-primary"
                // loading={loading}
                size="large"
                style={{ padding: '1.3rem' }}
              >
                {t('pages.auth.buttonSignIn')}
              </BaseButton>
            </Col>
          </Row>
        </div>

        {/* <span className="sub-title">{formData.subTitle1}</span> */}
        {/* <FormIcon /> */}
        <WrapperFormItem></WrapperFormItem>
        {/* <a href="#a">{formData.subTitle2}</a> */}
      </Form>
    </ContainerForm>
  );
};

export default FormContainer;
