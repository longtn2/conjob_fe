import { Layout, Slider } from 'antd';
import { styled } from 'styled-components';

const { Content } = Layout;

export const ContainerContent = styled(Content)`
  background-color: #f2f5f2;
  .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-item a, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu a{
    padding: 10px;
    color: #141414;
    border-radius: 8px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .ant-menu-item a:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: "";
  }

`;


export const ContainerSider = styled.div`
  background-color: #f2f0f5;
  ul.ant-menu.ant-menu-root.ant-menu-inline.ant-menu-light.menu.css-dev-only-do-not-override-1kuana8 {
    background: #f2f0f5;
  }
  .icon {
    display: inline-flex;
    width: 32px;
    height: 32px;
    box-shadow: 0 4px 6px rgb(0 0 0 0/12%);
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
    vertical-align: middle;
  }
  .anticon .anticon-calendar .ant-menu-item-icon {
    background-color: transparent;
  }
  span.anticon {
    height: 20px;
  }
  span.icon {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 0 10px 5px 0;
  }

  span.anticon > svg {
    font-size: 22px;
  }

  .ant-menu-item span.icon {
    width: 32px;
    height: 32px;
    background-color: #f2f0f5;
  }

  li.ant-menu-item {
    margin-bottom: 20px;
  }
  &.ant-menu-item .ant-menu-item-selected {
    background-color: #fff;
    box-shadow: 0 20px 27px rgb(0, 0, 0/5%);
    font-weight: 600;
  }
`;
