import { Typography } from 'antd';

import { BaseButton } from '../../common/BaseButton/BaseButton';
import { useEffect, useState } from 'react';
import { ContainerToogleImplement } from './ToogleImplement.styled';
import { DataToogle, TypeActivePanel } from 'interfaces/interfaces';
import { dataToogleSignIn, dataToogleSignUp } from 'constants/constants';
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
  const [toogleData, setToogleData] = useState<DataToogle>(returnData());

  function returnData(): DataToogle {
    return state === 'sign-in' ? dataToogleSignIn : dataToogleSignUp;
  }
  useEffect(() => {
    setToogleData(returnData());
  }, [state]);
  return (
    <ContainerToogleImplement
      className={`${state === 'sign-in' ? 'toogle-left' : 'toogle-right'} ${
        isActive ? '' : 'active'
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
