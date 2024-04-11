import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  HomeOutlined,
  SelectOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import Slider from 'antd/es/layout/Sider';

const SliderComponent = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');

  const getMenuStyle = (key: string) => {
    return page === key
      ? {
          background: 'linear-gradient(180deg, #C5091F 0%, #870413 100%',
          color: '#fff',
        }
      : {};
  };

  return (
    <>
      <Slider
        style={{ marginTop: 13 }}
        breakpoint='lg'
        collapsedWidth={70}
        trigger={null}
        theme='light'
        width={'200px'}
      >
        <div className='demo-logo-vertical' />
        <Menu
          className='menu'
          onClick={({ key }) => {
            navigator(key);
          }}
          theme='light'
          mode='inline'
        >
          <Menu.Item
            key='/'
            icon={<AppstoreOutlined />}
            style={getMenuStyle('')}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key='/category'
            icon={<CalendarOutlined />}
            style={getMenuStyle('category')}
          >
            Category
          </Menu.Item>
          <Menu.Item
            key='/post'
            icon={<HomeOutlined />}
            style={getMenuStyle('post')}
          >
            Video Management
          </Menu.Item>
          <Menu.Item
            key='/userManager'
            icon={<UserOutlined />}
            style={getMenuStyle('userManager')}
          >
            History Video
          </Menu.Item>
          <Menu.Item
            key='/bookingManager'
            icon={<SelectOutlined />}
            style={getMenuStyle('bookingManager')}
          >
            History Video Delete
          </Menu.Item>
        </Menu>
      </Slider>
    </>
  );
};

export default SliderComponent;
