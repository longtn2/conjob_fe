import React from 'react';
import { ContainerMedia } from '@/components/common/VideoPlayer/MediaContent.styled';

interface MediaContentProps {
  file_type: string | undefined;
  file_url: string | undefined;
  file_name: string | undefined;
}

const MediaContent: React.FC<MediaContentProps> = ({
  file_type,
  file_url,
  file_name
}) => {
  return (
    <ContainerMedia>
      {file_type &&
        (file_type === 'Video' ? (
          <video
            className="video-source"
            controls
            playsInline
            preload="metadata"
          >
            <source src={file_url} type="video/mp4" />
          </video>
        ) : (
          <img
            src={file_url}
            alt={file_name}
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        ))}
      {!file_type && <p>No file attached.</p>}
    </ContainerMedia>
  );
};

export default MediaContent;
