import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const handleFetch = useCallback(async () => {
    console.log("handleFetch");

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
      <h1>Detail</h1>
      {loading ? <h1>Loading...</h1> : <Movie movie={movie} />}
    </div>
  );
};

export default Detail;
