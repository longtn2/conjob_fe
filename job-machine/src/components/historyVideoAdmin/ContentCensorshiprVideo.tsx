import React, { useState } from 'react';
import { InforPost, ResponseDataPostAPI } from '@/interfaces/interfaces';
import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Spin,
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
  RESPONSIVE_BREAK_POINT
} from '@/constants/constants';
import { getMessageStatus, statusCode } from '@/helper';
import DrawerCensorshipVideo from './DrawerCensorshipVideo';
import { PostApi } from '@/api/post/PostApi';
import { useTranslation } from 'react-i18next';

const { Title, Link, Text } = Typography;

interface ContentCensorshipVideoProps {
  dataHistory: ResponseDataPostAPI;
  handlePage: (number: number) => void;
  page: number;
  getLoading: () => boolean;
  handleFlag: () => void;
}

const ContentCensorshiprVideo = ({
  dataHistory,
  handlePage,
  handleFlag,
  page,
  getLoading
}: ContentCensorshipVideoProps) => {
  const { token } = theme.useToken();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState<InforPost | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);
  const loading = getLoading();
  const columns = [
    {
      title: <Title level={5}>{t('pages.history.table.index')}</Title>,
      key: 'index',
      dataIndex: 'index',
      render: (text, listUsers, index) => (
        <span className="responsive-content-table">
          {index + 1 + (pagination.current - 1) * pagination.pageSize}
        </span>
      )
    },
    {
      title: <Title level={5}>{t('pages.history.table.content')}</Title>,
      dataIndex: 'title',
      key: 'title',
      width: '40%',
      render: ({ title }, items) => {
        return (
          <div>
            <div className="responsive-content-table">
              <Text>
                {t('pages.history.table.genre')} <span>{items.title}</span>
              </Text>
            </div>
            <div
              className={`${items.statusPost === 'active' && 'action-caption'}`}
            >
              <Link
                className="read-more"
                onClick={() => handleClickShowMore(items)}
              >
                {t('pages.history.table.see')}
              </Link>
              {items.statusPost === 'active' && (
                <Link onClick={() => modalShowDelete(items)}>
                  {t('common.delete')}
                </Link>
              )}
            </div>
          </div>
        );
      },
      ellipsis: true,
      responsive: RESPONSIVE_BREAK_POINT
    },
    {
      title: <Title level={5}>{t('pages.history.table.creator_at')}</Title>,
      dataIndex: 'created_at',
      key: 'created_at',
      width: '15%',
      render: created_at => (
        <span className="responsive-content-table">{created_at}</span>
      ),
      responsive: RESPONSIVE_BREAK_POINT
    },
    {
      title: <Title level={5}>{t('pages.history.table.author')}</Title>,
      dataIndex: 'author',
      key: 'author',
      width: '15%',
      ellipsis: true,
      render: text => <span className="responsive-content-table">{text}</span>,
      responsive: RESPONSIVE_BREAK_POINT
    },
    {
      title: <Title level={5}>{t('pages.history.table.statusPost')}</Title>,
      dataIndex: 'statusPost',
      key: 'statusPost',
      width: '20%',
      render: statusPost => {
        const { color, message } = statusCode[statusPost];
        return (
          <Tag
            color={color}
            key={message}
            className="responsive-content-table"
            style={{ padding: '0.4vw', borderRadius: '0.25vw' }}
          >
            {t(`pages.history.table.${statusPost}`)}
          </Tag>
        );
      },
      ellipsis: true,
      responsive: RESPONSIVE_BREAK_POINT
    }
  ];

  const handleChangePage = newPage => {
    handlePage(newPage);
  };

  const handlePageSizeChange = (pageSize: number) => {
    const newPerPage = pageSize;
    const newCurrentPage =
      Math.ceil(((page - 2) * PER_PAGE_CENSOR_HISTORY) / newPerPage) + 1;
    handlePage(newCurrentPage);
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
  const handleDeleteItems = (id: number) => {
    PostApi.apiDelete(id)
      .then((response: any) => {
        handleFlag();
        Modal.destroyAll();
        getMessageStatus(response.message, 'success');
      })
      .catch(error => {
        getMessageStatus(error.message, 'error');
      });
  };
  const modalShowDelete = (item: InforPost) => {
    Modal.warning({
      title: <Title level={4}>{t('common.delete')}</Title>,
      content: (
        <Text>{t('pages.history.modal.content', { author: item.author })}</Text>
      ),
      footer: (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginTop: '0.8rem'
          }}
        >
          <Button
            type="primary"
            danger
            onClick={() => handleDeleteItems(item.id)}
            style={{ marginRight: '10px' }}
          >
            {t('common.delete')}
          </Button>
          <Button type="default" onClick={() => Modal.destroyAll()}>
            {t('common.close')}
          </Button>
        </div>
      )
    });
  };
  const handleCloseDrawer = () => {
    setIsOpen(false);
    setSelectedItems(undefined);
  };

  return (
    <Spin spinning={loading} className="spin-loading-content">
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
              <Title level={2}>{t('pages.history.title')}</Title>
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
    </Spin>
  );
};

export default ContentCensorshiprVideo;
