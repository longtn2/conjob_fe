import React, { useRef, useState } from 'react';
import { InforPost } from '@/interfaces/interfaces';
import { Image } from 'antd';
interface VideoProps {
  index: number | string;
  post: InforPost;
  col: number;
}

const VideoPlayer: React.FC<VideoProps> = ({ post, col }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play().catch();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  function getClassForCol(col: number) {
    const colClasses = {
      24: 'xl-video-player',
      6: 'md-video-player'
    };
    return colClasses[col] || 'xs-video-player';
  }
  return (
    <div className="card__content">
      {post?.type_file === 'Img' ? (
        <Image
          src={post.url_file}
          className={getClassForCol(col)}
          placeholder={<Image preview={false} src={post.url_file} />}
        />
      ) : (
        <div className={getClassForCol(col)} onClick={togglePlay}>
          <video
            ref={videoRef}
            width="100%"
            height={col === 6 ? '200px' : '100%'}
            controls
            playsInline
            muted={true}
            style={{ objectFit: 'fill' }}
          >
            <source src={post.url_file} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
