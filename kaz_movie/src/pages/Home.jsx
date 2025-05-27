
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
 


import starwarV from '../assets/video/star-wars.mp4'
import disneyV from '../assets/video/disney.mp4'
import marvelV from '../assets/video/marvel.mp4'
import nationalGeographicV from '../assets/video/national-geographic.mp4'
import pixarV from '../assets/video/pixar.mp4'


import GenresList from '../constant/GenerList'
import MovieList from '../components/MovieList'

import Pricing from "../components/Pricing";
import Modal from '@mui/material/Modal';

import Card from '../components/OpinionCard'
import { testimonials  } from '../constant/GenerList'; 
import { TopMovies  } from '../constant/GenerList'; 


import { useState } from 'react';

function Home() {

    const [OpenPrice, setOpenPrice] = useState(false);
  

   const productionHouseList=[
      {
          id:1,
          image:disney,
          video:disneyV
      },
      {
          id:2,
          image:pixar,
          video:pixarV
      },
      {
          id:3,
          image:marvel,
          video:marvelV
      },
      {
          id:4,
          image:starwar,
          video:starwarV
      },
      {
          id:5,
          image:nationalG,
          video:nationalGeographicV
      },
  
  ]

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-[300px] bg-[url("https://oxo.kz/templates/Moplay/images/01.jpg")] bg-no-repeat bg-center'>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-80 w-full">
          <h1 className=" text-white text-xl sm:text-4xl font-bold">
            Welcome to Kaz Movie
          </h1>
          <p className="text-white text-[12px] mt-2 sm:text-xl">
            You can buy new movies here
          </p>
          <button   onClick={() => setOpenPrice(true)}  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300">
            Vibe group
          </button>

           {OpenPrice && (
               <Modal open={OpenPrice} onClose={() => setOpenPrice(false)}>
                 <Pricing Close={() => setOpenPrice(false)} />
               </Modal>
           )}
        </div>
      </div>

     


      <div className="flex gap-2 md:gap-5 p-2 px-5   py-[30px] md:px-16 ">
        {productionHouseList.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl  shadow-gray-800"
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0  top-0 rounded-md opacity-0 hover:opacity-50"
            />
            <img src={item.image} className="w-full z-[1] opacity-100" />
          </div>
        ))}
      </div>

      <div>
        {GenresList.genere.map(
          (item, index) =>
            index <= 4 && (
              <div key={item.id} className="p-8 px-8 md:px-16">
                <h1 className="text-white text-[20px] font-bold">
                  {item.name}
                </h1>
                <MovieList generId={item.id} index_={index} />
              </div>
            )
        )}
      </div>

      <div className="overflow-hidden w-full mt-4">
        <div className="flex animate-scroll-right space-x-6 w-max">
          {[...testimonials.slice(0, 9), ...testimonials.slice(0, 9)].map(
            (testimonial, index) => (
              <Card key={index} testimonial={testimonial} />
            )
          )}
        </div>
      </div>

      <div className="overflow-hidden w-full mt-10">
        <div className="flex animate-scroll-left space-x-6 w-max">
          {[...testimonials.slice(9), ...testimonials.slice(9)].map(
            (testimonial, index) => (
              <Card key={index} testimonial={testimonial} />
            )
          )}
        </div>
      </div>

      <div className="overflow-hidden w-full mt-10 mb-4">
        <div className="flex animate-scroll-right space-x-6 w-max">
          {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map(
            (testimonial, index) => (
              <Card key={index} testimonial={testimonial} />
            )
          )}
        </div>
      </div>

      <div className="px-5 py-5 ">
        <div className="container px-5 py-5 w-[80%] mx-auto border-[var(--theme-color)] border-[1px] rounded-lg bg-[var(--footerhover)])]">
          <h1 className="text-white text-4xl font-bold mb-4">
            Top Collected Movies by Views
          </h1>

          <div className="w-full flex flex-col gap-4">
            {/* 1-ші қолданушы */}
            <div className="flex items-center gap-4 p-2 border-b">
              <img
                src={TopMovies[0].img}
                alt="Rodrigo Ceni"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-white text-md font-semibold">
                  {TopMovies[0].title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-[90%] bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-[var(--theme-color2)] h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">3 231,787</span>
                </div>
              </div>
            </div>

            {/* 2-ші қолданушы */}
            <div className="flex items-center gap-4 p-2 border-b">
              <img
                src={TopMovies[1].img}
                alt="Felipe"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-white text-md font-semibold">
                  {TopMovies[1].title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-[90%] bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-[var(--theme-color2)] h-2.5 rounded-full"
                      style={{ width: "90.54%" }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">2 923,431</span>
                </div>
              </div>
            </div>

            {/* 3-ші қолданушы */}
            <div className="flex items-center gap-4 p-2 border-b">
              <img
                src={TopMovies[2].img}
                alt="enterpr1se"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-white text-md font-semibold">
                  {TopMovies[2].title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-[90%] bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-[var(--theme-color2)] h-2.5 rounded-full"
                      style={{ width: "27.94%" }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">897,284</span>
                </div>
              </div>
            </div>

            {/* 4-ші қолданушы */}
            <div className="flex items-center gap-4 p-2">
              <img
                src={TopMovies[3].img}
                alt="raze464"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-white text-md font-semibold">
                  {TopMovies[3].title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-[90%] bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-[var(--theme-color2)] h-2.5 rounded-full"
                      style={{ width: "17%" }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">558,330</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2">
              <img
                src={TopMovies[4].img}
                alt="raze464"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-white text-md font-semibold">
                  {TopMovies[4].title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-[90%] bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-[var(--theme-color2)] h-2.5 rounded-full"
                      style={{ width: "15.4%" }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">498,330</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home




