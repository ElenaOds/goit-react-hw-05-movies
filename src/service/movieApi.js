import axios from "axios";

const KEY = '56fe42c945e3ca855df6abfdcd1328f7';

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });


//   https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

  export const getTrendingMovies = async () => {
    const { data } = await moviesApi.get(`trending/movie/day`, {
      params: {
        api_key: KEY,
        page: 1,
      },
    });
    return data;
  };

//   https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  
export const searchMovie = async query => {
    const { data } = await moviesApi.get(`search/movie`, {
      params: {
        api_key: KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query,
      },
    });
    return data;
  };

//   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getMovie = async movieId => {
    const { data } = await moviesApi.get(`movie/${movieId}`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data;
  };

  
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const getCredits = async movieId => {
    const { data } = await moviesApi.get(`movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data;
  };

  

//   https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const getReviews = async movieId => {
    const { data } = await moviesApi.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return data;
  };

  // https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

  export const getImages = async movieId => {
    const { data } = await moviesApi.get(`movie/${movieId}/images`, {
      params: {
        api_key: KEY,
        language: 'en-US',
       
      },
    });
    return data;
  };