import useMovieTrailer from "hooks/useMovieTrailer";
import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={
          "https://www.youtube.com/embed/UGOvEad8qd4?si=" + trailerVideo?.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
