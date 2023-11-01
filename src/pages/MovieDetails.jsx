import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {get} from "../data/httpClient";
import {getMovieImage} from "../utils/getMovieImage";
import "../pages/MovieDetails.css"

export const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
            setGeneros(data.genres);
        })
    },[movieId]);

    

    const imageUrl = getMovieImage(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
        <img className="col movieImage"src={imageUrl} alt={movie.title}/>
        <div className="col movieDetails">
            <p className="title"><strong>Título: </strong>{movie.title}</p>
            <p><strong>Géneros: </strong>
            {generos.map((genero)=>(
                <span key={genero.id}>{genero.name + " "}</span>
            ))}
            </p>
            <p><strong>Descripción: </strong>{movie.overview}</p>

        </div>
    </div>
  )
}
