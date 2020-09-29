import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { searchMovie } from './../redux/actions/searchMovie';
// import { fetchMovies } from './../redux/actions/fetchMovies';
// import { setLoading } from './../redux/actions/loading';

import {searchMovie, fetchMovies, setLoading} from "./../redux/actions/searchActions";


 class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    console.log(this.props.fetchMovies(this.props.text));
    this.props.setLoading();
  };

  render() {
    return (
      <div >
        <div >
          <h1 >
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    text: state.movies.text
  });



export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
