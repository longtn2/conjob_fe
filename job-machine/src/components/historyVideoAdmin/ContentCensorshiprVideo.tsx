import React, { useEffect, useState } from 'react';
import { historyApi } from '@/api/history/historyApi';
import {
  InforPost,
  ParamsPostVideo,
  ResponseDataPostAPI
} from '@/interfaces/interfaces';
import {
  Card,
  Col,
  Pagination,
  Row,
  Table,
  Tag,
  theme,
  Typography
} from 'antd';
import BaseFormSelection from '@/shared/common/Form/FormSelection';
import { useForm } from 'react-hook-form';
import {
  ORDER_BY_POST,
  PER_PAGE_CENSOR_HISTORY,
  formatDate
} from '@/constants/constants';
import { formatDayjs, getStatusPost, statusCode } from '@/helper';
import DrawerCensorshipVideo from './DrawerCensorshipVideo';

const { Title, Link, Text } = Typography;

const ContentCensorshiprVideo = () => {
  const { token } = theme.useToken();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();
  const [dataHistory, setDataHistory] = useState<
    ResponseDataPostAPI | undefined
  >(undefined);

  const [page, setPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<InforPost | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);

  const getParams = () => {
    return {
      Page: page,
      Limit: PER_PAGE_CENSOR_HISTORY,
      status_filter: undefined
    };
  };
  const fetchData = async () => {
    await historyApi.apiGetAll(getParams()).then(res => {
      if (res.data) {
        const formattedDataHistory: ResponseDataPostAPI = {
          ...res.data,
          items: res.data.items.map(values => {
            const formattedCreatedAt = formatDayjs(
              values.created_at,
              formatDate.DATE_TIME_SECONDS
            );
            const status = getStatusPost(values.is_actived, values.is_deleted);
            return {
              ...values,
              created_at: formattedCreatedAt,
              statusPost: status
            };
          })
        };
        setDataHistory(formattedDataHistory);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const columns = [
    {
      title: 'STT',
      key: 'index',
      dataIndex: 'index',
      render: (text, listUsers, index) =>
        index + 1 + (pagination.current - 1) * pagination.pageSize
    },
    {
      title: 'Nội dung',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
      render: ({ title }, items) => {
        return (
          <div>
            <div className="content-caption">
              <Text>
                Thể loại: <span>{items.title}</span>
              </Text>
            </div>
            <div className="action-caption">
              <Link
                className="read-more"
                onClick={() => handleClickShowMore(items)}
              >
                Xem
              </Link>
              <Link>Xóa</Link>
            </div>
          </div>
        );
      },
      ellipsis: true
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'created_at',
      key: 'created_at',
      width: '15%'
    },
    {
      title: 'Người đăng bài',
      dataIndex: 'author',
      key: 'author',
      width: '15%',
      ellipsis: true
    },
    {
      title: 'Trạng thái kiểm duyệt',
      dataIndex: 'statusPost',
      key: 'statusPost',
      width: '20%',
      render: statusPost => {
        const { color, message } = statusCode[statusPost];
        return (
          <Tag color={color} key={message}>
            {message.toUpperCase()}
          </Tag>
        );
      },
      ellipsis: true
    }
  ];

  const handleChangePage = newPage => {
    setPage(newPage);
  };

  const handlePageSizeChange = (pageSize: number) => {
    const newPerPage = pageSize;
    const newCurrentPage =
      Math.ceil(((page - 2) * PER_PAGE_CENSOR_HISTORY) / newPerPage) + 1;
    setPage(newCurrentPage);
  };
  const pagination = {
    current: page,
    pageSize: PER_PAGE_CENSOR_HISTORY,
    total: dataHistory?.totalCount,
    onChange: handleChangePage,
    onShowSizeChange: handlePageSizeChange
  };
  const handleClickShowMore = (values: InforPost) => {
    setSelectedItems(values);
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
    setSelectedItems(undefined);
  };
  return (
    <Card
      style={{
        padding: '0 24px',
        background: token ? token.colorBgContainer : '#ffffff'
      }}
    >
      <Row gutter={[64, 32]}>
        <Col span={24}>
          <div
            className="header-title"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Title level={2}>Danh sách nội dung</Title>
            <BaseFormSelection
              control={control}
              options={ORDER_BY_POST}
              name="order_by"
              className="header-filter"
            />
          </div>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={dataHistory?.items}
            pagination={pagination}
          />
        </Col>
      </Row>
      {selectedItems && (
        <DrawerCensorshipVideo
          open={isOpen}
          data={selectedItems}
          onClose={handleCloseDrawer}
        />
      )}
    </Card>
  );
};

export default ContentCensorshiprVideo;
