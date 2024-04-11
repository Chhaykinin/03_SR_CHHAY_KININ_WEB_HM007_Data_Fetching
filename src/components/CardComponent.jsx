import { getAllMovieService, getByGenreMovies } from '@/services/movie.service';
import Link from "next/link";
import React from 'react'

const CardComponent = async () => {
  const movieData = await getAllMovieService();

  const filterGenre = [...new Set(movieData.payload.map((movie) => movie.genre))];
  const handleAllMovieByGenre = async (genre) => {
    const genreData = await getByGenreMovies(genre);
    return genreData.payload.map((data) => {
      return (
        
        <div>
          <div>
            <Link href={`/movie/${data?.movie_id}`}>
              <div key={data?.movie_id} className="card  w-80 bg-slate-50 shadow-xl">
                  {/* imgae  */}
                  <figure><img src={data.image==""? "https://image.tving.com/upload/cms/caip/CAIP0400/P001731527.jpg/dims/resize/1280":data.image}  /></figure>
                  <div className="card-body h-44">
                    <h2 className="card-title">
                      {data.movie_title}
                      
                    </h2>
                    <p className="line-clamp-3"> {data.description}</p>
                  </div>
                
              </div>
            </Link>
          </div>
        </div>
      )
    })
  }
  console.log("Movie Data:", filterGenre);
  return (
    <div>
      <h1 className="text-cyan-50 p-3  text-2xl"> All Movie &gt;</h1>
      <div className=" carousel flex p-5 gap-10 bg-red-700 overflow-y-scroll">
        {movieData.payload.map((data) => (
          <Link href={`/movie/${data?.movie_id}`} scroll={false} >
            <div key={data?.movie_id}>
              <div className="card w-80 bg-base-100 shadow-xl ">
                {/* imgae  */}
                <figure><img src={data.image==""? "https://image.tving.com/upload/cms/caip/CAIP0400/P001731527.jpg/dims/resize/1280":data.image} /></figure>
                <div className="card-body h-44">
                  <h2 className="card-title">
                    {data.movie_title}
                  </h2>
                  <p className='line-clamp-3'>{data.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filterGenre.map((genre) => (
        <div className="" >
          <h1 className="text-cyan-50 p-3 text-2xl mt-5"> {genre} &gt;</h1>
          <div className=" carousel flex p-5 gap-10 bg-red-700 overflow-y-scroll">

          {handleAllMovieByGenre(genre)}
          </div>

        </div>
      ))}
    </div>
  );
};

export default CardComponent;
