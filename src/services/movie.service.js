//Get all movie
export async function getAllMovieService(){
    const res =await fetch(
        " https://movie-api-get-only-bmc3.vercel.app/api"
    )
    console.log("Res value:",res)
    const data =await res.json();
    return data;
}
export async function getMovieServiceById(movid_id){
    const res =await fetch(
        ` https://movie-api-get-only-bmc3.vercel.app/api/${movid_id}`
    );
    console.log("Res value:",res)
    const data =await res.json();
    return data;
}
export async function getByGenreMovies(genre){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`);
    const data = res.json();
    return data;
}
