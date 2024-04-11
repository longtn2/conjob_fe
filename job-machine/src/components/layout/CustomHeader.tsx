import React from "react";
import { Avatar, Flex } from "antd";
import Search from "antd/es/transfer/search";
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

export const CustomSearch = styled(Flex)`
  :where(.css-dev-only-do-not-override-wjv9xc).ant-input-affix-wrapper {
    padding: 7px 15px;
    border-radius: 12px;
    font-size: 18px;
  }
`;

export const CustomHeader = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{ margin: "10px 15px" }}
    >
      <CustomSearch align="flex-end" gap="3rem" style={{ width: "300px" }}>
        <Search placeholder="Search something..." />
      </CustomSearch>
      <Flex align="center" gap={25}>
        <MessageOutlined className="header-icon" />
        <NotificationOutlined className="header-icon" />
        <Avatar icon={<UserOutlined />} />
      </Flex>
    </Flex>
  );
};
