import { Post } from '@/api/mock/news.api';
import { InforPost } from '@/interfaces/interfaces';
import { Avatar } from 'antd';
import React from 'react';

interface MediaContentProps {
  type_file: string | undefined;
  url_file: string | undefined;
  name_file: string | undefined;
}

const MediaContent: React.FC<MediaContentProps> = ({
  type_file,
  url_file,
  name_file
}) => {
  return (
    <div className="card__content">
      {type_file &&
        (type_file === 'Video' ? (
          <video width="100%" controls playsInline preload="metadata">
            <source src={url_file} type="video/mp4" />
          </video>
        ) : (
          <img
            src={url_file}
            alt={name_file}
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        ))}
      {!type_file && <p>No file attached.</p>}
    </div>
  );
};

export default MediaContent;
