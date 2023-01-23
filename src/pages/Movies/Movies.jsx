import { searchMovie } from "../../service/movieApi";
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import {Box, List, Item, StyledLink } from "./Movies.styled";


export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
  
  useEffect(() => {
    if (!query) {
        return;
      }

    const fetchData = async () => {
      try {
        const {results} = await searchMovie(query);
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  const handleChange = value => {
   setSearchParams(value !== "" ? { query: value } : {});
   
  }


    return (
        <Box>
        <SearchBox value={query} onChange={handleChange} />
       {movies.length > 0 && (
       
    <List>
    {movies?.map(({ id, title }) => (
      <Item key={id}>
    <StyledLink key={id} id={id} to={`${id}`} title={title}>{title}</StyledLink>
    </Item>
  ))}
  </List>
       )}
                
    </Box>
    )
};