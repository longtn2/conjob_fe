import { Flex, Popconfirm, Typography } from "antd";
import { BaseSelect, Option } from "components/common/BaseSelect";
import { BaseButton } from "components/common/BaseButton/BaseButton";
import { CardCustom } from "../../pages/Admin/PostManage/PostManagement.styled";
import { BaseInput } from "../common/BaseInput/index";

const FilterPost = () => {
  return (
    <>
      <CardCustom
        style={{ marginTop: "25px", marginRight: "10px" }}
        size="small"
      >
        <Flex gap={10} style={{ justifyContent: "center" }}>
          <Flex>
            <Popconfirm title={"Bạn có chắc muốn xoá không?"}>
              <BaseButton size="large" className="btn-delete">
                Xóa
              </BaseButton>
            </Popconfirm>
          </Flex>
          <Flex>
            <BaseButton size="large" className="btn-accept">
              Duyệt
            </BaseButton>
          </Flex>
        </Flex>
      </CardCustom>
      <CardCustom
        style={{ marginTop: "25px", marginRight: "10px" }}
        size="small"
      >
        <Flex vertical gap="30px">
          <Flex vertical align="flex-start" gap={10}>
            <Typography.Title level={4} className="search">Tìm kiếm</Typography.Title>
            <BaseInput placeholder="Nhập tên người dùng, nội dung bài..." />
            <Typography.Title level={5}>Loại nội dung</Typography.Title>
            <Flex gap={10}>
              <BaseSelect
                defaultValue="Tất cả"
                allowClear
                style={{ height: "40px", width: "110px" }}
              >
                <Option value="all">Tuyển dụng</Option>
                <Option value="week">Ứng tuyển</Option>
              </BaseSelect>
              <BaseSelect
                defaultValue="Tất cả"
                allowClear
                style={{ height: "40px", width: "140px" }}
              >
                <Option value="all">Video đã duyệt</Option>
                <Option value="week">Video đã xoá</Option>
              </BaseSelect>
            </Flex>
            <Flex gap={10} justify="center">
              <BaseButton size="large" className="btn-reset">
                Đặt lại 
              </BaseButton>
              <BaseButton size="large" className="btn-find">
                Tìm kiếm
              </BaseButton>
            </Flex>
          </Flex>
        </Flex>
      </CardCustom>
    </>
  );
};

export default FilterPost;
