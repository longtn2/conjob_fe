import {
  UserOutlined,
  MessageOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";


const SideBar = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <FlagOutlined />,
            label: "Report",
          },
          {
            key: "3",
            icon: <MessageOutlined />,
            label: "Message",
          },
          {
            key: "4",
            icon: <CarryOutOutlined />,
            label: "Category",
          },
          {
            key: "5",
            icon: <ProfileOutlined />,
            label: "Post",
          },
          {
            key: "6",
            icon: <UserOutlined />,
            label: "Profile",
          },
        ]}
      />
    </>
  );
};

export default SideBar;
