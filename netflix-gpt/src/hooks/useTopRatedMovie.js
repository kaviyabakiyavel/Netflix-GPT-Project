import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "utils/movieSlice";
import { API_OPTIONS } from "utils/constants";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  //Fetch data from tmdb api and update store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovie;
