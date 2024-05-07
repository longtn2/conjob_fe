import { Layout, Slider } from 'antd';
import { styled } from 'styled-components';

const { Content } = Layout;

export const ContainerContent = styled(Content)`
  background-color: #f2f5f2;
  .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-item a,
  .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu a {
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
    content: '';
  }
  .sc-iuOOrT .eGBUjo {
    margin: 0 auto;
  }
`;

export const ContainerLayout = styled.div`
  .layout-app {
    width: 100%;
    background: #fafafa;
  }
  .ant-layout-content {
    border-radius: 6px;
    transition: all 0.25s ease 0s;
    padding: 24px 32px;
    min-height: 360px;
  }
  .ant-layout-sider {
    padding: 5px;
  }
  .ant-menu {
    margin-top: 7%;
    font-size: 16px;
    font-weight: 450;
    padding: 8%;
    border: none;
  }
  ul.ant-menu.ant-menu-root {
    border: none !important;
  }
  .header-layout {
    height: 5rem;
  }
  .ant-layout-sider .icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    box-shadow: 0 4px 6px rgb(0 0 0 0/12%);
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
    vertical-align: middle;
  }
  .ant-menu-item {
    margin: 10px 0;
  }
  .ant-menu-title-content {
    display: flex;
    align-items: center;
  }
  .ant-layout-sider .ant-menu-item {
    padding-left: 0 !important;
  }
  .header-layout {
    justify-content: flex-end;
  }

  .demo-logo-vertical {
    width: 100%;
    margin: 5% 0;
  }

  .logo-container {
    width: 60%;
    margin: 0 auto;
  }

  .button-container {
    margin-top: 10%;
    display: flex;
    justify-content: flex-end;
  }
  .profile-slider {
    margin-top: 22%;
    position: relative;
    transition: ease-in-out 5s;
  }
  .avatar-admin {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  .avatar-admin > .ant-image {
    width: 100%;
    height: 100%;
  }
  .avatar-admin img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .content-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h3.ant-typhography {
    color: #dadada;
  }

  .ant-layout-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .button-container {
    width: 100%;
  }

  .button-container button {
    margin: 0 auto;
    width: 80%;
    height: 30%;
  }
  .ant-menu-item .ant-menu-item-selected .ant-menu-item-only-child {
    width: 50%;
  }
`;
