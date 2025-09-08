import useNowPlayingMovie from "hooks/useNowPlayingMovie";
import Header from "./Header"
import Maincontainer from "./MainContainer";


const Browser = () => {
  useNowPlayingMovie()
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
