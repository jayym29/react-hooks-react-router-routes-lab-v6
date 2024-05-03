import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieCards, setMovieCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(res => res.json())
    .then(data => setMovieCards(data))
  }, [])

  const moviesListed = movieCards.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} movieId={movie.id}/>
  })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {moviesListed}
      </main>
    </>
  );
};

export default Home;