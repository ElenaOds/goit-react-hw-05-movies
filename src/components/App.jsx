import { Route, Routes } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { Home } from "../pages/Home/Home";



export const App = () => {
  return (
    
    <>
  
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} >
            <Route path="movieId" element={<div>MovieDetails</div>} >
              <Route path="cast" element={<div>Cast</div>} />
              <Route path="reviews" element={<div>Reviews</div>} />
            </Route> 
          </Route> 
        </Route>
      </Routes>
    </>
    
  );
};
