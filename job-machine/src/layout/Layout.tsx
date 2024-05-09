import { useState } from 'react';
import { Outlet, useMatch, useMatches } from 'react-router-dom';
import { ConfigProvider, Layout, theme } from 'antd';
import HeaderComponent from './Header';
import SliderComponent from './Slider';
import './Layout.css';
import { ContainerLayout } from './Content.styled';
import { ModeTheme } from '@/interfaces/interfaces';
import { DARK_TOKEN, LIGHT_TOKEN } from '@/style/DarkLight';
import { useMediaQuery } from 'react-responsive';
import { breakPointSize } from '@/constants/constants';

const { Content } = Layout;

const LayoutApp = () => {
  const match = useMatch('/:childPath/*');
  const childPath = match?.params.childPath ?? '/';
  const isMobile = useMediaQuery({ maxWidth: breakPointSize.TABLET - 1 });
  const [isTheme, setIsTheme] = useState<ModeTheme>('light');

  const handleChangeTheme = (value: ModeTheme) => {
    setIsTheme(value);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isTheme === 'dark' ? theme.darkAlgorithm : undefined,
        token: isTheme === 'dark' ? DARK_TOKEN : LIGHT_TOKEN
      }}
    >
      <ContainerLayout>
        <Layout className="layout-app">
          <SliderComponent />
          <Layout>
            <HeaderComponent handleChangeTheme={handleChangeTheme} />
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </ContainerLayout>
    </ConfigProvider>
  );
};

export default LayoutApp;
