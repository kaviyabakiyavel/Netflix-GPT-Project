import useNowPlayingMovie from "hooks/useNowPlayingMovie";
import Header from "./Header";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "hooks/usePopularMovies";
import useTopRatedMovie from "hooks/useTopRatedMovie";
import useUpcomingMovies from "hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
      {/*
         Maincontainer 
          - videobackground 
          - videotitle
        SecondaryContainer 
          - MovieList * n
          - Card * n
      */}
    </div>
  );
};

export default Browser;
