import { getMovie } from "../../service/movieApi";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ReactComponent as ButtonIcon } from "../../icons/left-arrow.svg";
import { StyledLink, Section, Img, List, Item, Text } from "./MovieDetails.styled";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    const getYear = () => new Date(movie.release_date).getFullYear();
    const getScore = () => (Math.round(movie.vote_average * 10) + '%');
    const getGenre = () => (movie.genres.map(({ name }) => name).join(', '));

    useEffect(() => {
        getMovie(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) 
    return null;

    const { poster_path, title, overview } = movie;
    const backLinkHref = location.state?.from ?? "/movies";
    
    return (
        <div>
            <StyledLink to={backLinkHref}>
            <ButtonIcon aria-label="Return back"/>
            Go back</StyledLink>
                    
            { movie && (
                <>
            <Section>
            <Img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
                />
            <div>
                <h2>{title} ({getYear()})</h2>
                <p>User score: {getScore()}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{getGenre()}</p>
            </div>
            </Section>
            <Text>Additional information</Text> 
            <List>
            <Item><Link to='cast' state={location.state}>Cast</Link></Item>
            <Item><Link to='reviews' state={location.state}>Reviews</Link></Item>
            </List>
            <Outlet />
            </>
            )}
        </div>
    )
}

export default MovieDetails;