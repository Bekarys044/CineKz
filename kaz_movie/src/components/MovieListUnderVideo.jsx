

// import React, { useEffect, useRef } from 'react'
// import GlobalApi from '../Server/Global.Api'
// import { useState } from 'react'
// import MovieCard from './MovieCard'
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import HrMovieCard from './HrMovieCard'


// function MovieListUnderVideo( {generId,index_}) {


//     const [movilist, setMoviList] = useState([]);



//     const elementRef = useRef(null);

//     const sliderRight = () => {
//         if (elementRef.current) {
//           elementRef.current.scrollLeft += window.innerWidth - 110;
//         }
//       };
      
//       const sliderLeft = () => {
//         if (elementRef.current) {
//           elementRef.current.scrollLeft -= window.innerWidth - 110;
//         }
//       };
      


//     // console.log("🎬 MovieList компоненті ашылды");
//     // console.log("generId:", generId);
  


//     useEffect(() => {
//       console.log("📦 useEffect ішіне кірді");
//       if (generId) {
//         getMovieByGenereId();
//       }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [generId])





//     const getMovieByGenereId = () => {
//         GlobalApi.getMovieByGenereId(generId).then((resp) => {
//           console.log("🎥 API response:", resp.data.results);
//           setMoviList(resp.data.results);
//         }).catch((err) => {
//           console.error("❌ API қатесі:", err);
//         });
//       };
   
    

//   return (
//         <div className='relative  group'>
//                  <ArrowLeft
//                         onClick={sliderLeft}
//                         className='hidden md:block opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-[30%] md:top-[50%] left-0 z-10 text-[var(--theme-color)] text-[65px] cursor-pointer'
//                     />
//                     <div  ref={elementRef}  className='flex  overflow-x-auto gap-4  scroll-smooth scrollbar-hide p-8 px-8 md:px-16 group'>
//                         {
//                            // eslint-disable-next-line no-unused-vars
//                            movilist.map((item, index) => (
//                             <>
//                                 {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
//                              </> 
//                            ))
//                         }
//                    </div>

//            <ArrowRight
//                   onClick={sliderRight}
//                   className='hidden md:block opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-[30%] md:top-[50%] right-0 z-10 text-[var(--theme-color)] text-[65px] cursor-pointer'
//               />
//     </div>
//   )
// }

// export default MovieListUnderVideo
