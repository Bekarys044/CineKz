import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3/';
const api_key = '3d5a22a20a050aee4580ab6472643fce';

// Трендтегі бейнемазмұнды алу
const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}trending/all/day?api_key=${api_key}`);
};

// Белгілі бір жанр бойынша фильмдер алу
const getMovieByGenereId = (genreId) => {
  return axios.get(`${movieBaseUrl}discover/movie?api_key=${api_key}&with_genres=${genreId}`);
};

// Фильмнің бейнемазмұнын алу
const getMovieVideos = (movieId) => {
  return axios.get(`${movieBaseUrl}movie/${movieId}/videos?api_key=${api_key}`);
};

// Фильм туралы толық мәліметтерді алу
const getMovieDetails = (movieId) => {
  return axios.get(`${movieBaseUrl}movie/${movieId}?api_key=${api_key}`);
};

export default {
  getTrendingVideos,
  getMovieByGenereId,
  getMovieVideos,
  getMovieDetails, // Фильм туралы толық мәліметтер алу
};
