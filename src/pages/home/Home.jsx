import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from "./../../components/SearchForm";
import MoviesContainer from "./../../components/MoviesContainer";
import Spinner from "./../../components/Spinner";

export class Home extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Home);
