import React from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  url: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return <ReactPlayer url={url} />;
};
