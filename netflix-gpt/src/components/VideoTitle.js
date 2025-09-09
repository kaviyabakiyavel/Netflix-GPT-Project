import { FaPlay, FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          <FaPlay className="text-black" />
          <span>Play</span>
        </button>
        <button className="flex items-center gap-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          <FaCircleInfo />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
