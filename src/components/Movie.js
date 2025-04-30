import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({movieDetail}) {
    return (
        <div className={styles.movie}>
            <Link to={`/poster/${movieDetail.id}`}><img alt={movieDetail.title} src={movieDetail.medium_cover_image} className={styles.movie__img}/></Link>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${movieDetail.id}`}>{movieDetail.title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{movieDetail.year}</h3>
            <p>{movieDetail.summary.length > 235 ? `${movieDetail.summary.slice(0, 255)}...` : movieDetail.summary}</p>
            <ul className={styles.movie__genres}>
                {movieDetail.genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleLong: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Movie;