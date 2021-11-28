import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const handleFetch = useCallback(async () => {
    const {
      data: { movie },
    } = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...🕰</h1>
      ) : (
        <div className={styles.container}>
          <h1>Detail</h1>
          <Movie movie={movie} />
        </div>
      )}
    </div>
  );
};

export default Detail;
