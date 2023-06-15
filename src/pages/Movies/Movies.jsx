import { searchMovie } from "../../service/movieApi";
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import {Box, List, Item, StyledLink, Img } from "./Movies.styled";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/Loader/Loader";
import image from "../../image/Noimage.jpg";

const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") ?? "";
  
  useEffect(() => {
    if (!searchQuery) {
        return
      }

    const fetchData = async () => {
      setStatus('pending');
      try {
        const {results} = await searchMovie(searchQuery);
        if(results.length === 0 ) {
          return toast.error(
             'Sorry, there are no movies matching your search query. Please try again.');
        }
        setMovies([...results]);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]);


  const handleSubmit = value => {
    setSearchParams({ query: `${value}` });
  };
  
      return (
        <Box>
        <SearchBox onSubmit={handleSubmit} />
       {movies.length > 0 && (
       
    <List>
    {movies?.map(({ id, title, poster_path }) => (
      <Item key={id}>
    <StyledLink key={id} id={id} to={`${id}`} title={title} state={{from: location}}>
    {poster_path === null ? (
            <Img
            src={image}
            alt={title}
              />
           ) : (
            <Img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
              />
           )}
    </StyledLink>
    </Item>
  ))}
  </List>
       )}
       {status === "pending"  && <Loader />}     
    </Box>
    
    )
};

export default Movies;