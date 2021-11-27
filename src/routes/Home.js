import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const handleFetch = async () => {
    const {
      data: { movies },
    } = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=year")).json();
    setMovies(movies);
    setLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
