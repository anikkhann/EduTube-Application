import React from "react";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
import Video from "../videos/Video";
import VideosError from "../ui/VideosError";
const Videos = ({ selectedTags, search }) => {
  console.log("tags & search", { selectedTags, search });
  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useGetVideosQuery({ selectedTags, search });
  //decide what to render
  let content = null;
  // if isLoading videos

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }
  //if !isLoading && isError
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }
  //if !isLoading && !isError && videos?.length === 0
  if (!isLoading && !isError && videos?.length === 0) {
    content = <VideosError message="No Videos Found" />;
  }
  // if !isLoading && !isError && videos?.length === 1
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return content;
};

export default Videos;
