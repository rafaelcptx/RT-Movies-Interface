import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
    console.log(topMovies);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedURL);
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className="filmsContainer">
      <h2>Filmes melhores avaliados...</h2>
      <div className="filmDiv">
        {topMovies.lenght === 0 && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => (
            <FilmCard
              title={movie.title}
              image={movie.poster_path}
              score={movie.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
