import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Typography, Form, Input } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import FormIcon from './FormIcon';
import { ContainerForm } from './FormContainer.styled';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import {
  Data,
  FormLoginType,
  FormRegisterType,
  TypeActivePanel,
} from 'interfaces/interfaces';
import { SIGN_IN, dataSignIn, dataSignUp } from 'constants/constants';
import { WrapperFormItem } from './WrapperFormItem.styled';
import { useDispatch } from 'react-redux';
import {
  loginRequest,
  registerRequest,
} from '../../../redux/actions/authAction';
import { schemaLogin, schemaRegister } from 'utils/yup';

const { Title } = Typography;

type FormContainerProps = {
  state: TypeActivePanel;
};

const FormContainer = ({ state }: FormContainerProps) => {
  const [formData, setFormData] = useState<Data>(dataSignIn);

  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm<
    FormLoginType | FormRegisterType
  >({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver<FormLoginType | FormRegisterType>(
      state === SIGN_IN ? schemaLogin : schemaRegister
    ),
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

  const handleSubmitForm = (values: FormRegisterType | FormLoginType) => {
    if (state === SIGN_IN) {
      dispatch(loginRequest(values));
    } else {
      dispatch(registerRequest(values as FormRegisterType));
    }
  };

  return (
    <ContainerForm className={`${state}`}>
      <Form onFinish={handleSubmit(handleSubmitForm)}>
        <Title level={1}>{formData.title}</Title>
        <span className='sub-title'>{formData.subTitle1}</span>
        <FormIcon />
        <WrapperFormItem>
          {formData.fieldInput.map(value => (
            <Controller
              key={value.name}
              name={value?.name}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Form.Item
                    validateStatus={fieldState.error?.message ? 'error' : ''}
                    help={fieldState.error?.message || null}
                  >
                    {value.name === 'password' ? (
                      <Input.Password {...field} placeholder={value.label} />
                    ) : (
                      <Input {...field} placeholder={value.label} />
                    )}
                  </Form.Item>
                );
              }}
            />
          ))}
        </WrapperFormItem>
        <a href='#a'>{formData.subTitle2}</a>
        <BaseButton htmlType='submit'>{formData.contentButton}</BaseButton>
      </Form>
    </ContainerForm>
  );
};

export default FormContainer;