import { useState } from 'react';
import { Col, Image, Menu, Row, Typography, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'antd/es/layout/Sider';
import LogoSvg from '@/assets/images/ConJob.svg';
import CategorySvg from '@/assets/images/svg/Category.svg';
import PlaySvg from '@/assets/images/svg/Play.svg';
import Home from '@/assets/images/svg/Home.svg';
import Product from '@/assets/images/svg/Product.svg';
import Profile from '@/assets/images/svg/Profile.svg';
import ArrowRight from '@/assets/images/svg/Arrow - Right Circle.svg';
import ArrorLeft from '@/assets/images/svg/Arrow - Left Circle.svg';
import LogoCollapsed from '@/assets/images/CJ.svg';
import { pathUrlRouter } from '@/constants/constants';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';

const { Title } = Typography;

const SliderComponent = () => {
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const avatar = localStorage.getItem('avatar');

  const getMenuStyle = key => {
    return page === key
      ? {
          color: token.colorTextSecondary
        }
      : {
          color: token.colorText,
          borderRadius: '5px',
          boxShadow: '0 100px 40px rgba(0, 0, 0, 0.12)'
        };
  };

  const getLabelMenuStyle = key => {
    return page === key && { fontWeight: '600' };
  };

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Slider
      style={{
        minHeight: '100vh',
        borderRight: `1px solid ${token.colorBorder}`
      }}
      trigger={null}
      theme="light"
      width="13%"
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      breakpoint="lg"
      collapsedWidth="4%"
    >
      <div className="demo-logo-vertical">
        <div className="logo-container">
          <Image
            src={collapsed ? LogoCollapsed : LogoSvg}
            preview={false}
            width="100%"
            style={{ background: token ? token.colorBgContainer : '#ffffff' }}
          />
        </div>
      </div>
      {!collapsed && (
        <div className={`profile-slider ${collapsed && 'hidden'}`}>
          <div className="avatar-admin">
            {avatar && <Image src={avatar} alt="Image Admin" preview={false} />}
          </div>
          <div className="content-profile">
            <Title level={3}>{`${firstName} ${lastName}`}</Title>
            <span style={{ color: token ? token.colorTextBase : '#000000' }}>
              Dễ gần khó xa
            </span>
          </div>
        </div>
      )}
      <Menu
        className="menu"
        onClick={({ key }) => {
          navigator(key);
        }}
        theme="light"
        mode="inline"
      >
        <Menu.Item
          title={'Dashboard'}
          key={pathUrlRouter.HOME}
          style={{
            ...(page === '' &&
              !collapsed && { background: '#dadada', color: 'black' })
          }}
          className="menu-item"
        >
          <div className="icon" style={getMenuStyle('')}>
            <Image src={Home} preview={false} />
          </div>
          {!collapsed && (
            <span className="label" style={{ ...getLabelMenuStyle('') }}>
              Dashboard
            </span>
          )}
        </Menu.Item>
        <Menu.Item
          title={'Category'}
          key={pathUrlRouter.CATEGORY}
          style={{
            ...(page === 'category' &&
              !collapsed && {
                background: '#dadada',
                color: 'black'
              })
          }}
        >
          <div className="icon" style={getMenuStyle('category')}>
            <Image src={CategorySvg} preview={false} />
          </div>
          {!collapsed && (
            <span
              className="label"
              style={{ ...getLabelMenuStyle('category') }}
            >
              Category
            </span>
          )}
        </Menu.Item>
        <Menu.Item
          title={'Post'}
          key={pathUrlRouter.POST}
          style={{
            ...(page === 'post' &&
              !collapsed && { background: '#dadada', color: 'black' })
          }}
        >
          <div className="icon" style={getMenuStyle('post')}>
            <Image src={PlaySvg} preview={false} />
          </div>
          {!collapsed && (
            <span className="label" style={{ ...getLabelMenuStyle('post') }}>
              Post
            </span>
          )}
        </Menu.Item>
        <Menu.Item
          title={'History Video'}
          key={pathUrlRouter.HISTORY_VIDEO}
          style={{
            ...(page === 'history' && {
              background: '#dadada',
              color: 'black'
            })
          }}
        >
          <div className="icon" style={getMenuStyle('history')}>
            <Image src={Product} preview={false} />
          </div>
          {!collapsed && (
            <span className="label" style={{ ...getLabelMenuStyle('history') }}>
              History Video
            </span>
          )}
        </Menu.Item>
        <Menu.Item
          title={'Profile'}
          key={pathUrlRouter.PROFILE}
          style={{
            ...(page === 'profile' &&
              !collapsed && { background: '#dadada', color: 'black' })
          }}
        >
          <div className="icon" style={getMenuStyle('profile')}>
            <Image src={Profile} preview={false} />
          </div>
          {!collapsed && (
            <span className="label" style={{ ...getLabelMenuStyle('profile') }}>
              Profile
            </span>
          )}
        </Menu.Item>
      </Menu>
      <div className="button-container">
        <BaseButton
          className="toggle-button"
          onClick={handleToggleCollapse}
          style={{ background: token.colorInfoBg, color: token.colorInfoText }}
        >
          <Image src={collapsed ? ArrowRight : ArrorLeft} preview={false} />
        </BaseButton>
      </div>
    </Slider>
  );
};

export default SliderComponent;
