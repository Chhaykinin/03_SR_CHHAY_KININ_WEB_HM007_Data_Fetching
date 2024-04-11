import { getAllMovieService } from "@/services/movie.service";

const MoviePage = async ()=>{
    const movie = await getAllMovieService();
    console.log("movie:",movie);
    
}
export default MoviePage;