import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [ actors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
    .then(res => res.json())
    .then(data => {
      setDirectors(data)
    })
  }, [])

  const actorsListed =  actors.map(actor => {
    const moviesActed = actor.movies
    const listMoviesActed = moviesActed.map((movie, index) => (<li key={index}>{movie}</li>))
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {listMoviesActed}
        </ul>
      </article>
    )
  })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsListed}
      </main>
    </>
  );
};

export default Actors;