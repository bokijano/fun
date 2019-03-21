import React from "react";

const FavoriteMovieList = ({ movie, handleDelete }) => {
  const movieList =
    movie.length > 0 ? (
      movie.map(add => (
        <div key={add.id}>
          <p>
            <span className="favouriteStyle"> Movie:</span> {add.name}
            {", "}
            <span className="favouriteStyle">Main actor:</span> {add.mainActor}
            {", "}
            <span className="favouriteStyle">Year:</span> {add.year}
            {", "}
            <span className="favouriteStyle">Genre:</span> {add.genre}
            <button
              style={{ marginLeft: "150px" }}
              className="btn btn-primary"
              onClick={() => handleDelete(add.id)}
            >
              Delete from the list
            </button>
          </p>
          <hr />
        </div>
      ))
    ) : (
      <p style={{ textAlign: "center" }}>Your list is empty!</p>
    );

  return (
    <div className="favoriteList">
      <h2 style={{ marginTop: "5px", paddingBottom: "15px" }}>
        List of your favorite movies:
      </h2>
      <hr />
      {movieList}
    </div>
  );
};

export default FavoriteMovieList;
