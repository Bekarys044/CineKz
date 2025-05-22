
import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
import { Link } from 'react-router-dom'

function HrMovieCard({movie}) {
  return ( 
   <Link to={`/movie/${movie.id}`}>
          <section className='hover:scale-110 transition-all duration-150 ease-in'>
                <img src={IMAGE_BASE_URL+movie.backdrop_path} 
                    className='w-[110px] md:w-[260px] rounded-lg
                    hover:border-[3px] border-[var(--theme-color2)] cursor-pointer'/>
                    <h2 className='w-[110px] md:w-[260px] text-white
                     mt-2'>{movie.title}</h2>
            </section>
    </Link>
  )
}

export default HrMovieCard