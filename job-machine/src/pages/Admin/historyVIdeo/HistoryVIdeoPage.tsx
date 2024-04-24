import React from 'react';
import ContentCensorshiprVideo from '@/components/historyVideoAdmin/ContentCensorshiprVideo';
import HeaderCensorshipVideo from '@/components/historyVideoAdmin/HeaderCensorshipVideo';
import { ContainerHistoryVideo } from './HistoryVideo.styled';

type Props = {};

const HistoryVIdeoPage = () => {
  return (
    <ContainerHistoryVideo>
      <HeaderCensorshipVideo />
      <ContentCensorshiprVideo />
    </ContainerHistoryVideo>
  );
};

export default HistoryVIdeoPage;
