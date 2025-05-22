import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Server/Global.Api'; // api.js файлыңыздың дұрыс жолы
import GenresList from '../constant/GenerList';
import MovieList from '../components/MovieList';

const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

function EachMoviePage() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState('');
  const [movieData, setMovieData] = useState(null);

  // Фильм туралы толық мәліметтерді алу
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movieRes = await api.getMovieDetails(id); // API арқылы фильмнің толық мәліметтерін алу
        setMovieData(movieRes.data);
      } catch (error) {
        console.error('Фильм туралы мәліметтер табылмады:', error);
      }
    }

    async function fetchMovieVideo() {
      try {
        const res = await api.getMovieVideos(id);
        const videos = res.data.results;
        const trailer = videos.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (error) {
        console.error('Видео табылмады:', error);
      }
    }

    fetchMovieData(); // Фильмнің мәліметтерін алу
    fetchMovieVideo(); // Видео мәліметтерін алу
  }, [id]);

  return (
    <div className='flex flex-col items-center'>
      {/* Видео бөлімі */}
      <div className='flex justify-center items-center h-screen'>
        {videoKey ? (
          <iframe
            width="1200"
            height="550"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Видео табылмады...</p>
        )}
      </div>

      {/* Фильм туралы толық мәліметтер */}
      <div className='w-full px-8 md:px-16'>
        {movieData ? (
          <div className='grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr] gap-4'>
            <div>
               <img
                 src={ImgBaseUrl + movieData.poster_path}
                 alt={movieData.title}
                 className="w-[100px] md:w-[300px] mb-4"
               />
            </div>
            <div> 
              <h2 className='text-2xl md:text-4xl'>{movieData.title}...</h2>
              <p className='text-sm md:text-lg  text-[var(--body-text-color)]  py-8'>{movieData.overview}</p>

              <div className='text-[var(--footerhover)] text-sm md:text-lg'>
                  <span className='text-[var(--theme-color2)] pr-2'>  Genre:</span>
                  audarylgan / Fantasy/ Horror / Drama <br />
                  <span className='text-[var(--theme-color2)] pr-2'>Quality: <div className='bg-[var(--footerhover)] text-white w-8 h-8 rounded-[4px] flex justify-center items-center'>4K</div></span>
              </div>
              
            </div>
             <div className="max-w-sm mx-auto mt-10">
                    <h3 className="text-white text-lg  mb-4">
                      To download the movie:
                    </h3>
                  
                    <a
                      href="#"
                      className="block text-center text-white bg-[#29B6F6] hover:bg-[#0288D1] font-medium py-3 px-4  ml-6 mb-3 rounded-lg transition duration-300"
                    >
                      ⬇ DOWNLOAD: 480P HD
                    </a>
                  
                    <a
                      href="#"
                      className="block text-center text-white bg-[#29B6F6] hover:bg-[#0288D1] font-medium py-3 px-4 mb-3 ml-6 rounded-lg transition duration-300"
                    >
                      ⬇ DOWNLOAD: 720P HD
                    </a>
                  
                    <a
                      href="#"
                      className="block text-center text-white bg-[#29B6F6] hover:bg-[#0288D1] font-medium py-3 px-4 mb-3 ml-6 rounded-lg transition duration-300"
                    >
                      ⬇ DOWNLOAD: 1080P HD
                    </a>
                  
                    <a
                      href="#"
                      className="block text-center text-white bg-[#29B6F6] hover:bg-[#0288D1] font-medium py-3 px-4 mb-3  ml-6 rounded-lg transition duration-300"
                    >
                      ⬇ DOWNLOAD: ULTRA HD
                    </a>
                  
                    <a
                      href="#"
                      className="block text-center text-white bg-[#29B6F6] hover:bg-[#0288D1] font-medium py-3 px-4 ml-6   rounded-lg transition duration-300"
                    >
                      ⬇ DOWNLOAD: TELEGRAM
                    </a>
              </div>

          
          </div>
        ) : (
          <p>Фильм туралы мәліметтер жүктелуде...</p>
        )}
      </div>

      {/* Астында тұратын кинолар  */}
      <div className='w-full'>
        {GenresList.genere.map((item, index) => index <= 4 && (
          <div key={item.id} className='p-8 px-8 md:px-16'>
            <h1 className='text-white text-[20px] font-bold'>{item.name}</h1>
            <MovieList generId={item.id} index_={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EachMoviePage;
