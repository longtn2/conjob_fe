import React from 'react';
import { InforPost } from '@/interfaces/interfaces';
import { Avatar, Card, Drawer, Flex, Tag, Typography, theme } from 'antd';
import MediaContent from '@/components/common/VideoPlayer/MediaContent';
import { getJobTypeStatusCode } from '@/helper';
interface DrawerCensorshipProps {
  data: InforPost;
  open: boolean;
  onClose: () => void;
}
const { Meta } = Card;
const { Text, Title } = Typography;
const DrawerCensorshipVideo = ({
  data,
  open,
  onClose
}: DrawerCensorshipProps) => {
  const { token } = theme.useToken();
  const { message, color } = getJobTypeStatusCode(data.job_type);
  return (
    <Drawer
      title="Xem thêm"
      placement="right"
      size={'large'}
      onClose={onClose}
      open={open}
    >
      <Card style={{ padding: '20px' }}>
        <Meta
          avatar={<Avatar src={data.avatar_author} alt={data.author} />}
          title={data.author}
          description={data.created_at}
        />
        <Card.Grid style={{ width: '100%', marginTop: '8%' }}>
          <div className="text-drawer-censor">
            <Title level={4}>{data.title}</Title>
            <Flex
              justify="space-between"
              className="flex-content-job"
              style={{ marginBottom: '1rem' }}
            >
              <Text style={{ color: token.colorText }}>{data.title}</Text>
              <Tag color={color} key={message}>
                {message}
              </Tag>
            </Flex>
            <Text>{data.caption}</Text>
          </div>
          <div className="video-drawer-censor" style={{ marginTop: '5%' }}>
            <MediaContent
              type_file={data.type_file}
              url_file={data.url_file}
              name_file={data.name_file}
            />
          </div>
        </Card.Grid>
      </Card>
    </Drawer>
  );
};

export default DrawerCensorshipVideo;
