import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function MovieDetail({movie}) {
    return (
        <div className={styles.movie}>
            <div><img alt={movie.title} src={movie.medium_cover_image} className={styles.movie__img}/></div>
            <h2 className={styles.movie__title}>{movie.title_long}</h2>
            <h3 className={styles.movie__year}>{movie.year}</h3>
            <p>{movie.description_full}</p>
            <ul className={styles.movie__genres}>
                         {movie.genres.map((genre, index) => {
                             return <li key="{genre}+{index}">{genre}</li>
                         })}
            </ul>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleLong: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}
export default MovieDetail;
