import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../sass/3-layout/_movieCard.scss";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        <div className="card__body">
        <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
          <img className="card__img" src={movie.Poster} alt="Movie Cover" />
          <h5 className="card__h5">
            {movie.Title} - {movie.Year}
          </h5>
          <p className = "card__p">
            Movie Details
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
