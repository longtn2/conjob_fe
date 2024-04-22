<<<<<<< HEAD
import { Post } from "@/api/mock/news.api";
=======
import { Post } from "api/mock/news.api";
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
import React from "react";

interface VideoProps {
    index: number | string;
    post: Post;
}

const VideoPlayer: React.FC<VideoProps> = ({index, post}) => {
  return (
    <div className="card__content">
<<<<<<< HEAD
      <video id={`video-${index}`} width="400" controls preload="metadata">
        <source src={post.img} type="video/mp4" />
      </video>
=======
      {/* <video id={`video-${index}`} width="400" controls preload="metadata">
        <source src={post.img} type="video/mp4" />
      </video> */}
      {/* <div id={`video-${index}`} width="400" controls preload="metadata"> */}
        <img src={post.img} />
      {/* </div> */}
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
    </div>
  );
};

export default VideoPlayer;
