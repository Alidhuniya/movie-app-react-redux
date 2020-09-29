import React, { Component } from 'react';

import { connect } from 'react-redux';
import "./../sass/3-layout/_search.scss";

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
        <div className = "search" >
          <h1 className = "search__h1" >
            <i style = {{fontSize: "4rem"}} className="fa fa-search" /> <span className = "search__span">Search for a movies, TV series ...</span>
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className = "form-input"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <div className = "search-btn">
            <button className = "submit-btn" type="submit" >
              Search
            </button>
            </div>
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
