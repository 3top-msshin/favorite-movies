import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageParams, setPageParams] = useState([])

    const getMovies = async (page) => {
        if(pageParams.includes(page)) return;
        setLoading(true);
        try {
            const json = await (
                await fetch(
                    `https://yts.mx/api/v2/list_movies.json?minimaum_rating=8.8&sort_by=year&page={page}&limit=20`
                )
            ).json();
            setMovies((prevMovies) => [...prevMovies, ...json.data.movies]);
            setPageParams((prev) => [...prev, page]);
            //setHasNextPage(json.data.page < json.data.length)
            setLoading(false);
        } catch (error) {
            console.log("error:", error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getMovies(page);
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie key={movie.id} movieDetail={movie}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;