import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { Home } from "../pages/Home/Home";
import { Movies } from "../pages/Movies/Movies";



export const App = () => {
  return (
    
    <>
  
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element ={<Navigate to="home"/>} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} >
            <Route path=":movieId" element={<div>MovieDetails</div>} >
              <Route path="cast" element={<div>Cast</div>} />
              <Route path="reviews" element={<div>Reviews</div>} />
            </Route> 
          </Route> 
        </Route>
      </Routes>
    </>
    
  );
};
