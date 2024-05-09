import React from 'react';
import { InforPost } from '@/interfaces/interfaces';
import { Avatar, Card, Drawer, Flex, Tag, Typography, theme } from 'antd';
import MediaContent from '@/components/common/VideoPlayer/MediaContent';
import { getJobTypeStatusCode } from '@/helper';
import { ContainerDrawerCensorShip } from './DrawerCensorShipVideo.styled';
import { useMediaQuery } from 'react-responsive';
import { breakPointSize } from '@/constants/constants';
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
  const isMobile = useMediaQuery({
    maxWidth: breakPointSize.TABLET - 1
  });
  const { token } = theme.useToken();
  const { message, color } = getJobTypeStatusCode(data.job_type);
  return (
    <ContainerDrawerCensorShip>
      <Drawer
        title="Xem thêm"
        placement="right"
        size={isMobile ? 'default' : 'large'}
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
                <Text style={{ color: token.colorText }}>{data.job_title}</Text>
                <Tag color={color} key={message} style={{ height: '10%' }}>
                  {message}
                </Tag>
              </Flex>
              <Text>{data.caption}</Text>
            </div>
            <div className="video-drawer-censor" style={{ marginTop: '5%' }}>
              <MediaContent
                file_type={data.file_type}
                file_url={data.file_url}
                file_name={data.file_name}
              />
            </div>
          </Card.Grid>
        </Card>
      </Drawer>
    </ContainerDrawerCensorShip>
  );
};

export default DrawerCensorshipVideo;
