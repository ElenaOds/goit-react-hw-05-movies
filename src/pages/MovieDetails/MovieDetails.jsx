import { getMovie } from "../../service/movieApi";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    const getYear = () => new Date(movie.release_date).getFullYear();
    const getScore = () => (Math.round(movie.vote_average * 10) + '%');
    const getGenre = () => (movie.genres.map(({ name }) => name).join(', '));

    useEffect(() => {
        getMovie(movieId).then(setMovie);
    }, [movieId]);

    console.log(movie);

    if (!movie) 
    return null;

    const { poster_path, title, overview,  } = movie;
    return (
        <div>
            <Link to={location.state.from}>Go back</Link>
            { movie && (
            <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
                />
            <div>
                <h1>{title} ({getYear()})</h1>
                <p>User score: {getScore()}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{getGenre()}</p>
            </div>
            <ul>
             <p>Additional information</p>   
            <Link to={'cast'}>Cast</Link>
            <Link to={'revioes'}>Reviews</Link>
            </ul>
            </div>
            )}
        </div>
        
        
    )
}
