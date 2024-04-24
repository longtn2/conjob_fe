import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  HomeOutlined,
  CalendarOutlined,
  UserOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import Slider from 'antd/es/layout/Sider';
import { ContainerSider } from './Content.styled';
import { PATH_URL_ROUTER } from '@/constants/constants';

const SliderComponent = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');

  const getMenuStyle = (key) => {
    return page === key
      ? {
          background: 'linear-gradient(180deg, #C5091F 0%, #870413 100%)',
          color: '#fff',
        }
      : {
          background: '#ffffff',
          borderRadius: '5px',
          boxShadow: '0 100px 40px rgb(0 0 0 0/12%)',
        };
  };

  const getLabelMenuStyle = (key) => {
    return page === key ? { fontWeight: '600' } : {};
  };

  return (
    <ContainerSider>
      <Slider
        style={{ marginTop: 13 }}
        breakpoint="lg"
        collapsedWidth={70}
        trigger={null}
        theme="light"
        width="200px"
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="menu"
          onClick={({ key }) => {
            navigator(key);
          }}
          theme="light"
          mode="inline"
        >
          <Menu.Item
            key={PATH_URL_ROUTER.home}
            style={page === '' ? { background: '#fff', color: 'black' } : {}}
          >
            <span className="icon" style={getMenuStyle('')}>
              <AppstoreOutlined />
            </span>
            <span className="label" style={getLabelMenuStyle('')}>
              Dashboard
            </span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.category}
            style={
              page === 'category' ? { background: '#fff', color: 'black' } : {}
            }
          >
            <span className="icon" style={getMenuStyle('category')}>
              <CalendarOutlined />
            </span>
            <span className="label" style={getLabelMenuStyle('category')}>
              Category
            </span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.post}
            style={
              page === 'post' ? { background: '#fff', color: 'black' } : {}
            }
          >
            <span className="icon" style={getMenuStyle('post')}>
              <HomeOutlined />
            </span>
            <span className="label" style={getLabelMenuStyle('post')}>
              Post
            </span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.historyVideo}
            style={
              page === 'video-history'
                ? { background: '#fff', color: 'black' }
                : {}
            }
          >
            <span className="icon" style={getMenuStyle('video-history')}>
              <UserOutlined />
            </span>
            <span className="label" style={getLabelMenuStyle('video-history')}>
              History Video
            </span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.profile}
            style={
              page === "profile"
                ? { background: '#fff', color: 'black' }
                : {}
            }
          >
            <span className="icon" style={getMenuStyle('profile')}>
              <DeleteOutlined />
            </span>
            <span className="label" style={getLabelMenuStyle('profile')}>
              Profile
            </span>
          </Menu.Item>
        </Menu>
      </Slider>
    </ContainerSider>
  );
};

export default SliderComponent;