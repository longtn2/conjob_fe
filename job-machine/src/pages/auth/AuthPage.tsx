import React from 'react';
import { useEffect, useState } from 'react';
import { TypeActivePanel } from '../../interfaces/interfaces';
import WebFont from 'webfontloader';
import { Body, Container } from './Auth.styled';
import FormContainer from '@/components/auth/FormCommon/FormContainer';
import TooglePanel from '@/components/auth/ToogleCommon/TooglePanel';
import { SIGN_IN, SIGN_UP } from '@/constants/constants';


const AuthPage = () => {
  const [typePanel, setTypePanel] = useState<TypeActivePanel>('sign-in');
  const handleChange = () => {
    setTypePanel(prevPanel => (prevPanel === SIGN_IN ? SIGN_UP : SIGN_IN));
  };
  const returnTypeActive = () => {
    return typePanel;
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto'],
      },
    });
  }, []);
  return (
    <Body>
      <Container>
        <div className={`${typePanel === SIGN_IN || 'active'}`}>
          <FormContainer state={typePanel} />
          <TooglePanel
            handleChange={handleChange}
            returnTypePanel={returnTypeActive}
          />
        </div>
      </Container>
    </Body>
  );
};

export default AuthPage;
