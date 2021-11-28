import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
      <h1 className={styles.title}>🎬 Movie App 🎬</h1>
      {loading ? (
        <h1 className={styles.loading}>Loading...🕰</h1>
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
