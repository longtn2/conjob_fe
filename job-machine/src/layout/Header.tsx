import {
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Menu,
  MenuProps,
  Modal,
  Space,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const HeaderComponent = () => {
  const navigator = useNavigate();

  const handleNavigate = (key: string) => {
    navigator(key);
  };
  const items: MenuProps["items"] = [
    {
      label: "Infomaiton account",
      icon: <UserOutlined />,
      key: "informationaccount",
    },
    {
      label: "Change password",
      icon: <UserOutlined />,
      key: "changepassword",
    },
    {
      label: " Logout",
      icon: <LogoutOutlined />,
      key: "logout",
    },
    {
      label: "Messenger",
      icon: <MessageOutlined />,
      key: "messenger",
    },
  ];
  return (
    <>
      <Header className="header-layout">
        <Flex align="center" justify="center">
          <div className="logo" style={{ height: 60 }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "240px", height: "65px", marginLeft: '-50px' }}
            />
          </div>
        </Flex>

        <div style={{ display: "flex" }}>
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
            trigger={["click"]}
            arrow
          >
            <Button className="btn-account">
              <Space style={{ columnGap: 30 }}>
                <Avatar
                  style={{ marginLeft: 0 }}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                />
                ADMIN
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
