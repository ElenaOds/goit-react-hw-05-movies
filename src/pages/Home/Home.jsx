import { Box, Name, List, StyledLink, Item, Img } from "./Home.styled";
import { getTrendingMovies } from '../../service/movieApi';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import image from "../../image/Noimage.jpg";

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  
  useEffect(() => {
    const fetchData = async ({ page }) => {
      setStatus('pending');
      try {
        const { results } = await getTrendingMovies({ page });
        setMovies([...results]);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.error(error);
      }
    };

    fetchData({ page: 1 });
  }, []);


    return (
      <Box>
        <Name>Tranding today</Name>
        <List>
          {movies?.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} key={id} id={id} state={{from: location}}>
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
        {status === "pending"  && <Loader />}
       </Box> 
        
    )
};

export default Home;