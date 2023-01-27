import { Box, Name, List, StyledLink, Item } from "./Home.styled";
import { getTrendingMovies } from '../../service/movieApi';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
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
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} key={id} id={id} title={title} state={{from: location}}>{title}</StyledLink>
          </Item>
          ))}
        </List>
        
       </Box> 
    )
};

export default Home;