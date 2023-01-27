import { searchMovie } from "../../service/movieApi";
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import {Box, List, Item, StyledLink } from "./Movies.styled";


const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") ?? "";
  
  useEffect(() => {
    if (!searchQuery) {
        return;
      }

    const fetchData = async () => {
      try {
        const {results} = await searchMovie(searchQuery);
        setMovies([...results]);
      } catch (error) {
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
    {movies?.map(({ id, title }) => (
      <Item key={id}>
    <StyledLink key={id} id={id} to={`${id}`} title={title} state={{from: location}}>{title}</StyledLink>
    </Item>
  ))}
  </List>
       )}
                
    </Box>
    )
};

export default Movies;