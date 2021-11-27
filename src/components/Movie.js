import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <img src={movie?.medium_cover_image} alt={movie.title} />
      <h3>
        {movie.title} ({movie.year})
      </h3>
      <ul>
        {movie.genres?.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </Link>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
  }),
};

export default Movie;
