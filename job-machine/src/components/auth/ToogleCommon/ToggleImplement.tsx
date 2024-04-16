import { Typography } from 'antd';

import { useEffect, useState } from 'react';
import { ContainerToogleImplement } from './ToogleImplement.styled';
import { DataToogle, TypeActivePanel } from '@/interfaces/interfaces';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import {
  SIGN_IN,
  dataToogleSignIn,
  dataToogleSignUp,
} from '@/constants/constants';
const { Title, Paragraph } = Typography;

interface ToogleImplementProps {
  state: TypeActivePanel;
  isActive: boolean;
  handleClick: () => void;
}

const ToogleImplement = ({
  state,
  handleClick,
  isActive,
}: ToogleImplementProps) => {
  const [toogleData, setToogleData] = useState<DataToogle>(dataToogleSignUp);

  useEffect(() => {
    setToogleData(state === SIGN_IN ? dataToogleSignIn : dataToogleSignUp);
  }, [state]);
  return (
    <ContainerToogleImplement
      className={`${state === SIGN_IN ? 'toogle-left' : 'toogle-right'} ${
        isActive || 'active'
      }`}
    >
      <Title>{toogleData.titleToogle}</Title>
      <Paragraph>{toogleData.subTitleToogle}</Paragraph>
      <BaseButton onClick={handleClick} className='hidden'>
        {toogleData.buttonToogle}
      </BaseButton>
    </ContainerToogleImplement>
  );
};

export default ToogleImplement;
