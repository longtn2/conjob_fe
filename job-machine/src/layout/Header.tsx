import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Avatar, Button, Space, Switch, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { ModeTheme } from '@/interfaces/interfaces';
import LanguageSelect from '@/components/common/SelectFlag/LanguageSelectFlag';
import { breakPointSize } from '@/constants/constants';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

interface SliderComponentsProps {
  handleChangeTheme: (value: ModeTheme) => void;
}

const HeaderComponent = ({ handleChangeTheme }: SliderComponentsProps) => {
  const navigator = useNavigate();
  const { token } = theme.useToken();
  const isMobile = useMediaQuery({
    maxWidth: breakPointSize.TABLET - 1
  });
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const avatarAdmin = localStorage.getItem('avatar');
  // const handleNavigate = (key: string) => {
  //   if (key === 'logout') {
  //     handleLogout();
  //     navigator('/login');
  //   } else {
  //     navigator(key);
  //   }
  // };
  const handleThemeChange = (checked: boolean) => {
    handleChangeTheme(checked ? 'light' : 'dark');
  };

  // const items: MenuProps['items'] = [
  //   {
  //     label: 'Infomaiton account',
  //     icon: <UserOutlined />,
  //     key: 'informationaccount'
  //   },
  //   {
  //     label: 'Change password',
  //     icon: <UserOutlined />,
  //     key: 'changepassword'
  //   },
  //   {
  //     label: ' Logout',
  //     icon: <LogoutOutlined />,
  //     key: 'logout'
  //   },
  //   {
  //     label: 'Messenger',
  //     icon: <MessageOutlined />,
  //     key: 'messenger'
  //   }
  // ];
  return (
    <>
      <Header
        className="header-layout"
        style={{
          background: token.colorBgContainer,
          borderRight: token.colorBorder
        }}
      >
        {/* <Row> */}
        {/* <Col span={24}> */}
        {isMobile && (
          <Button className="btn-account">
            <Space
              style={{ columnGap: 30, fontSize: '1vw' }}
            >{`${firstName} ${lastName}`}</Space>
            <Avatar src={avatarAdmin} />
          </Button>
        )}
        {/* </Col> */}
        {/* <Col span={24}> */}
        <Space style={{ margin: '0.5rem 1rem' }}>
          <LanguageSelect />
        </Space>
        {/* </Col> */}
        {/* <Col span={24}> */}
        <Space direction="vertical">
          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            defaultChecked
            onChange={handleThemeChange}
          />
        </Space>
        {/* </Col> */}
        {/* </Row> */}
      </Header>
    </>
  );
};

export default HeaderComponent;
