import { useEffect, useState } from 'react';
import { Avatar, Col, Image, Menu, Row, Typography, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'antd/es/layout/Sider';
import LogoSvg from '@/assets/images/ConJob.svg';
import CategorySvg from '@/assets/images/svg/Category.svg';
import PlaySvg from '@/assets/images/svg/Play.svg';
import LogoutSVG from '@/assets/images/svg/Logout.svg';
import Product from '@/assets/images/svg/Product.svg';
import Profile from '@/assets/images/svg/Profile.svg';
import ArrowRight from '@/assets/images/svg/Arrow - Right Circle.svg';
import ArrorLeft from '@/assets/images/svg/Arrow - Left Circle.svg';
import LogoCollapsed from '@/assets/images/CJ.svg';
import { breakPointSize, pathUrlRouter } from '@/constants/constants';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { handleLogout } from '@/utils/utils';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { getMessageStatus } from '@/helper';
const { Title } = Typography;

const SliderComponent = () => {
  const { t } = useTranslation();
  const isTablet = useMediaQuery({
    minWidth: breakPointSize.TABLET - 1,
    maxWidth: breakPointSize.DESKTOP
  });
  const isMobile = useMediaQuery({
    maxWidth: breakPointSize.TABLET - 1
  });
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState<boolean>(isTablet || isMobile);

  const navigator = useNavigate();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
  const [firstName, setFirstName] = useState(
    () => localStorage.getItem('firstName') || ''
  );
  const [lastName, setLastName] = useState(
    () => localStorage.getItem('lastName') || ''
  );
  const [avatar, setAvatar] = useState(
    () => localStorage.getItem('avatar') || ''
  );
  const handleStorageChange = event => {
    if (event.key === 'firstName') {
      setFirstName(() => localStorage.getItem(firstName) || '');
    }
    if (event.key === 'lastName') {
      setLastName(() => localStorage.getItem(lastName) || '');
    }
    if (event.key === 'avatar') {
      setAvatar(() => localStorage.getItem(avatar) || '');
    }
  };
  useEffect(() => {
    const customStorageEvent = new CustomEvent('customStorage', {
      detail: {
        key: null,
        newValue: null
      }
    });

    const handleCustomStorageChange = event => {
      const { key, newValue } = event.detail;
      if (key === 'firstName') {
        setFirstName(newValue || '');
      }
      if (key === 'lastName') {
        setLastName(newValue || '');
      }
      if (key === 'avatar') {
        setAvatar(newValue || '');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('customStorage', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('customStorage', handleCustomStorageChange);
    };
  }, []);
  useEffect(() => {
    const handleResize = async () => {
      if (isTablet) {
        setCollapsed(true);
      }
      if (isMobile) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isTablet, isMobile]);

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
    <>
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
        collapsedWidth={isTablet ? '10%' : isMobile ? '15%' : '4%'}
      >
        <div className="demo-logo-vertical">
          <div className="logo-container">
            <Image
              src={collapsed ? LogoCollapsed : LogoSvg}
              preview={false}
              width="100%"
              style={{
                background: token ? token.colorBgContainer : '#ffffff'
              }}
            />
          </div>
        </div>
        {!collapsed && (
          <div className={`profile-slider ${collapsed && 'hidden'}`}>
            <div className="avatar-admin">
              {avatar && (
                <Image
                  src={avatar || undefined}
                  alt="Image Admin"
                  preview={false}
                />
              )}
            </div>
            <div className="content-profile">
              <Title level={3}>{`${firstName} ${lastName}`}</Title>
              <span
                style={{
                  color: token ? token.colorTextBase : '#000000',
                  textAlign: 'center'
                }}
              >
                {t('pages.slider.introduce')}
              </span>
            </div>
          </div>
        )}
        <Menu
          onClick={({ key }) => {
            if (key) {
              navigator(key);
            }
            if (key === pathUrlRouter.LOG_OUT) {
              handleLogout();
              navigator('/login');
            }
          }}
          theme="light"
          mode="inline"
        >
          <Menu.Item
            title={t('pages.slider.profile')}
            key={pathUrlRouter.PROFILE}
            style={{
              ...(page === 'profile' && {
                background: '#dadada',
                color: 'black'
              })
            }}
          >
            <div className="icon" style={getMenuStyle('profile')}>
              <Image src={Profile} preview={false} />
            </div>
            {!collapsed && (
              <span
                className="label"
                style={{ ...getLabelMenuStyle('profile') }}
              >
                {t('pages.slider.profile')}
              </span>
            )}
          </Menu.Item>
          <Menu.Item
            title={t('pages.slider.censor')}
            key={pathUrlRouter.POST}
            style={{
              ...(page === 'post' && {
                background: '#dadada',
                color: 'black'
              })
            }}
          >
            <div className="icon" style={getMenuStyle('post')}>
              <Image src={PlaySvg} preview={false} />
            </div>
            {!collapsed && (
              <span className="label" style={{ ...getLabelMenuStyle('post') }}>
                {t('pages.slider.censor')}
              </span>
            )}
          </Menu.Item>
          <Menu.Item
            title={t('pages.slider.history')}
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
              <span
                className="label"
                style={{ ...getLabelMenuStyle('history') }}
              >
                {t('pages.slider.history')}
              </span>
            )}
          </Menu.Item>
          <Menu.Item
            key={pathUrlRouter.LOG_OUT}
            title={t('pages.slider.logout')}
          >
            <div className="icon" style={getMenuStyle('logout')}>
              <Image src={LogoutSVG} preview={false} />
            </div>
            {!collapsed && (
              <span
                className="label"
                style={{ ...getLabelMenuStyle('logout') }}
              >
                {t('pages.slider.logout')}
              </span>
            )}
          </Menu.Item>
        </Menu>
        {!isMobile && (
          <div className="button-container">
            <BaseButton
              className="toggle-button"
              onClick={handleToggleCollapse}
              style={{
                background: token.colorInfoBg,
                color: token.colorInfoText
              }}
            >
              <Image src={collapsed ? ArrowRight : ArrorLeft} preview={false} />
            </BaseButton>
          </div>
        )}
      </Slider>
    </>
  );
};

export default SliderComponent;
