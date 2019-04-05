import React from "react";

const MoviesDisplay = ({ movies, addToFavorites }) => {
  const MoviesDisplay = movies.map(movie => (
    <div className="recomendedMovies" key={movie.id}>
      <p>Name: {movie.name}</p>
      <p style={{ textShadow: "1px 1px white" }}>
        Main actor: {movie.mainActor}
      </p>
      <p style={{ color: "dodgerBlue", textShadow: "1px 1px blue" }}>
        Year: {movie.year}
      </p>
      <p style={{ color: "dodgerBlue", textShadow: "1px 1px blue" }}>
        Genre: {movie.genre}
      </p>
      <button
        className="btn btn-primary"
        onClick={() => addToFavorites(movie.id)}
      >
        Add to favorites
      </button>
    </div>
  ));
  return <div className="gridLook">{MoviesDisplay}</div>;
};

export default MoviesDisplay;
