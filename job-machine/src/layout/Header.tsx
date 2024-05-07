import {
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
  MessageOutlined,
  SunOutlined,
  MoonOutlined
} from '@ant-design/icons';
import { pathUrlRouter } from '@/constants/constants';
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  MenuProps,
  Space,
  Switch,
  theme
} from 'antd';
import { Header } from 'antd/es/layout/layout';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { ModeTheme } from '@/interfaces/interfaces';
import { useEffect } from 'react';

interface SliderComponentsProps {
  handleChangeTheme: (value: ModeTheme) => void;
}

const HeaderComponent = ({ handleChangeTheme }: SliderComponentsProps) => {
  const navigator = useNavigate();
  const { token } = theme.useToken();

  const handleLogout = () => {
    const cookies = Cookies.get();
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('avatar');
    for (const cookie in cookies) {
      Cookies.remove(cookie);
    }
    navigator(pathUrlRouter.LOGIN);
  };
  const handleNavigate = (key: string) => {
    if (key === 'logout') {
      handleLogout();
    } else {
      navigator(key);
    }
  };
  const handleThemeChange = (checked: boolean) => {
    handleChangeTheme(checked ? 'light' : 'dark');
  };
  const items: MenuProps['items'] = [
    {
      label: 'Infomaiton account',
      icon: <UserOutlined />,
      key: 'informationaccount'
    },
    {
      label: 'Change password',
      icon: <UserOutlined />,
      key: 'changepassword'
    },
    {
      label: ' Logout',
      icon: <LogoutOutlined />,
      key: 'logout'
    },
    {
      label: 'Messenger',
      icon: <MessageOutlined />,
      key: 'messenger'
    }
  ];
  return (
    <>
      <Header
        className="header-layout"
        style={{
          background: token.colorBgContainer,
          borderRight: token.colorBorder
        }}
      >
        <Dropdown
          overlay={
            <Menu
              onClick={({ key }) => {
                handleNavigate(key);
              }}
              selectable
              items={items}
            />
          }
          trigger={['click']}
          arrow
        >
          <Button className="btn-account">
            <Space style={{ columnGap: 30 }}>
              ADMIN
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Space direction="vertical">
          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            defaultChecked
            onChange={handleThemeChange}
          />
        </Space>
      </Header>
    </>
  );
};

export default HeaderComponent;
