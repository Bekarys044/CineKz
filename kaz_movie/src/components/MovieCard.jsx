import React from 'react';
import { Link } from 'react-router-dom';

const ImgBaseUrl = "https://image.tmdb.org/t/p/original";


function MovieCard({ movie }) {
  
  return (
    <div className='flex-shrink-0'>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={ImgBaseUrl + movie.poster_path}
          className='w-[110px] md:w-[200px] hover:border-[4px] border-[var(--theme-color2)] hover:scale-110 transition duration-150 ease-in-out cursor-pointer hover:rounded-md'
        />
      </Link>
    </div>
  );
}

export default MovieCard;
