import React, { Component } from 'react';

import { connect } from 'react-redux';
import "../sass/3-layout/_movieCard.scss";

import MovieCard from "./MovieCard";



export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ?  movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className = "row">{content}</div>;
  }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
  });

export default connect(mapStateToProps, null)(MoviesContainer);
