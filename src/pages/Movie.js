import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
const [movie, setMovie] = useState({})
const [genres, setGenres] = useState([])
const params = useParams()
const movieId = params.id


useEffect(() => {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(res => res.json())
  .then(data => {
    setMovie(data)
    setGenres(data.genres)
  })
}, [movieId])

const genresListed = genres.map((genre, index) => {
  return (<span key={index}>{genre}</span>)
})



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
       <h1>{movie.title}</h1>
       <p>{movie.time}</p>
       {genresListed}
      </main>
    </>
  );
};

export default Movie;