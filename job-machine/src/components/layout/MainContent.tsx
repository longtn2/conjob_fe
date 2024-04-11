import { Flex } from "antd";
import Banner from "./Banner";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <Flex vertical gap="2.3rem">
        <Banner />
      </Flex>
    </div>
  );
};

export default MainContent;
