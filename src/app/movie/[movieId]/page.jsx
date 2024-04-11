import Fastar from '@/components/Fastar';
import { getMovieServiceById } from '@/services/movie.service';
import React from 'react'

const movieDetail = async ({ params }) => {
    // console.log("params: ", params.movieId);
    const data = await getMovieServiceById(params.movieId);
    console.log("movie data details",data);
    const rating= data.payload.rating;
    let rat=[]
    for(let i=0;i<Math.ceil(rating);i++){
        rat.push(i);
    }
    return (
        <div>
            <div className="bg-red-700 h-screen dark:bg-gray-800 py-8 text-cyan-50">
                    <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 mt-20 ">
                        <div className="flex flex-col md:flex-row -mx-4 ">
                            <div className="md:flex-1 px-4">
                                <div className="h-[500px] p-2 rounded-lg  dark:bg-gray-700 mb-4">
                                    <img className="w-full h-full object-cover" src={data.payload.image==""? "https://image.tving.com/upload/cms/caip/CAIP0400/P001731527.jpg/dims/resize/1280":data.payload.image}   />
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                {/* movie_title  */}
                                <h2 className="text-2xl font-bold dark:text-white mb-2">{data.payload.director}</h2>
                                <p className=" dark:text-gray-300 text-sm mb-4">
                                    {data.payload.runtime}minutes
                                </p>
                                 
                                 {/* rating  */}
                                <div className="mb-4">
                                    <span className="font-bold  dark:text-gray-300">{data.payload.genre}</span>
                                    <div className="flex items-center mt-2">
                                        {/* {data.payload.rating} */}
                                        <span className="flex">
                                            {rat.map(e=><Fastar/>)}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold  dark:text-gray-300">{data.payload.movie_title} ({data.payload.released_year})</span>
                                </div>
                                <div>
                                    {/* <span className="font-bold text-gray-700 dark:text-gray-300">{data.payload.director}</span> */}
                                    <p className=" dark:text-gray-300 text-sm mt-2">
                                    {data.payload.description}
                                    </p>
                                    <p className=" dark:text-gray-300 text-sm mt-2">
                                    {data.payload.posted_at}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default movieDetail;
