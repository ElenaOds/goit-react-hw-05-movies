import { Box, Name, List, StyledLink } from "./Home.styled";
import { getTrendingMovies } from '../../service/movieApi';
import { useState, useEffect } from 'react';



export function Home () {

  const [movies, setMovies] = useState([]);
  
  
  useEffect(() => {
    const fetchData = async ({ page }) => {
      try {
        const { results } = await getTrendingMovies({ page });
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData({ page: 1 });
  }, []);

    return (
      <Box>
        <Name>Tranding today</Name>
        <List>
          
        {movies?.map(({ id, title }) => (
            <StyledLink key={id} id={id} to={`${id}`} title={title}>{title}</StyledLink>
          ))}
          
        </List>
        
       </Box> 
    )
}