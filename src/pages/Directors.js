import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(res => res.json())
    .then(data => {
      setDirectors(data)
    })
  }, [])

  const directorsListed = directors.map((director) => {
    const moviesDirected = director.movies
    const listMoviesDirected = moviesDirected.map((movie, index) => (<li key={index}>{movie}</li>))
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {listMoviesDirected}
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
        <h1>Directors Page</h1>
        {directorsListed}
      </main>
    </>
  );
};

export default Directors;