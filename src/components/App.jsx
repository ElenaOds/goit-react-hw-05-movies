import { lazy } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from './Layout/Layout';
import Home from "../pages/Home/Home";
import Cast from "../components/Cast/Cast";
// import { Movies } from "../pages/Movies/Movies";
// import MovieDetails from "../pages/MovieDetails/MovieDetails";

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element ={<Navigate to="home"/>} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route> 
        </Route>
      </Routes>
    </>
    
  );
};
