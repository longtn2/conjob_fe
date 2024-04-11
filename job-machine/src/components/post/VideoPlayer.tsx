import { Post } from "api/mock/news.api";
import React from "react";

interface VideoProps {
    index: number | string;
    post: Post;
}

const VideoPlayer: React.FC<VideoProps> = ({index, post}) => {
  return (
    <div className="card__content">
      <video id={`video-${index}`} width="400" controls preload="metadata">
        <source src={post.img} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
