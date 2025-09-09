import useNowPlayingMovie from "hooks/useNowPlayingMovie";
import Header from "./Header"
import Maincontainer from "./MainContainer";
import usePopularMovies from "hooks/usePopularMovies"
import useTopRatedMovie from "hooks/useTopRatedMovie";
import useUpcomingMovies from "hooks/useUpcomingMovies";

const Browser = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <Maincontainer/>
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
