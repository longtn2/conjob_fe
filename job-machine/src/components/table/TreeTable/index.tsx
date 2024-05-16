import React, { useCallback, useEffect, useState } from "react";
import { BaseTable } from "../../common/BaseTable";
import { TableRowSelection } from "antd/es/table/interface";
import {
  TreeTableRow,
  Pagination,
  getTreeTableData,
} from "../../../api/mock/table.api";
import { useMounted } from "../../../hooks/useMounted";
import { Col, Flex } from "antd";
import Card from "antd/lib/card";
import TextArea from "antd/es/input/TextArea";
import { BaseModal } from "@/components/common/BaseModel";
import { BaseAvatar } from "@/components/common/BaseAvatar/BaseAvatar";
import { BaseInput } from "@/components/common/BaseInput";
import { BaseButton } from "@/components/common/BaseButton/BaseButton";

const initialPagination: Pagination = {
  current: 1,
  pageSize: 4,
};

export const TreeTable: React.FC = () => {
  const [isShowAcceptModal, setIsShowAcceptModal] = useState<boolean>(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState<boolean>(false);
  const [isShowViewModal, setIsShowViewModal] = useState<boolean>(false);

  const [tableData, setTableData] = useState<{
    data: TreeTableRow[];
    pagination: Pagination;
    loading: boolean;
  }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getTreeTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({
            data: res.data,
            pagination: res.pagination,
            loading: false,
          });
        }
      });
    },
    [isMounted]
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };

  const rowSelection: TableRowSelection<TreeTableRow> = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: TreeTableRow[],
      info
    ) => {

    },
    onSelect: (
      record: TreeTableRow,
      selected: boolean,
      selectedRows: TreeTableRow[]
    ) => {

    },
  };

  const columns = [
    {
      title: "Image or Video",
      dataIndex: "name",
      key: "name",
      width: "100px",
    },
    {
      title: "Title",
      dataIndex: "age",
      key: "age",
      width: "12%",
    },
    {
      title: "Category",
      dataIndex: "address",
      width: "30%",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "actions",
      width: "15%",
      render: () => {
        return (
          <>
            <div>
              <BaseModal
                title={"Accept"}
                open={isShowAcceptModal}
                onOk={() => setIsShowAcceptModal(false)}
                onCancel={() => setIsShowAcceptModal(false)}
              >
                <p>Are you sure</p>
              </BaseModal>
              <BaseModal
                title={"Reject"}
                open={isShowRejectModal}
                onOk={() => setIsShowRejectModal(false)}
                onCancel={() => setIsShowRejectModal(false)}
              >
                <p>Are you sure</p>
              </BaseModal>
              <BaseModal
                title={"View Video/Image"}
                open={isShowViewModal}
                onOk={() => setIsShowViewModal(false)}
                onCancel={() => setIsShowViewModal(false)}
              >
                <Flex gap={30}>
                  <Col span={12}>
                    <Card style={{height: '200px'}}>
                      <Flex gap={20}>
                        <BaseAvatar />
                        <Flex vertical gap={10}>
                          <div>User name</div>
                          <div>Designer</div>
                        </Flex>
                      </Flex>
                    </Card>
                  </Col>
                  <Col span={10}>
                    <Flex gap={20} vertical>
                      <BaseInput placeholder="User name" />
                      <BaseInput placeholder="Email" />
                      <TextArea
                        rows={4}
                        placeholder="Description"
                        maxLength={6}
                      />
                    </Flex>
                  </Col>
                </Flex>
              </BaseModal>
            </div>
            <Flex gap={5}>
              <BaseButton onClick={() => setIsShowViewModal(true)}>
                View
              </BaseButton>
              <BaseButton onClick={() => setIsShowAcceptModal(true)}>
                Accept
              </BaseButton>
              <BaseButton onClick={() => setIsShowRejectModal(true)}>
                Reject
              </BaseButton>
            </Flex>
          </>
        );
      },
    },
  ];

  return (
    <BaseTable
      columns={columns}
      dataSource={tableData.data}
      rowSelection={rowSelection}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
    />
  );
};
