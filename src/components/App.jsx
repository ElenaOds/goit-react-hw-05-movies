import { lazy } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from './Layout/Layout';
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

const Home = lazy(() => import('../pages/Home/Home'));
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
            <Route path="reviews" element={<Reviews />} />
          </Route> 
        </Route>
      </Routes>
    </>
    
  );
};
