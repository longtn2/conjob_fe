import { Typography } from 'antd';

import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { useEffect, useState } from 'react';
import { DataToogle, TypeActivePanel } from 'interfaces/interfaces';
import {
  SIGN_IN,
  dataToogleSignIn,
  dataToogleSignUp,
} from 'constants/constants';
import { ContainerToogleImplement } from './ToogleImplement.styled';
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

  // function returnData(): DataToogle {
  //   return state === SIGN_IN ? dataToogleSignIn : dataToogleSignUp;
  // }
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
