import React from 'react'
import { fetchResource } from '../fetch'
import { connect } from 'react-redux'
import { selectMovie } from '../actions/creators/movies'
import { getSelectedMovie } from '../selectors/movies';

export default function (WrappedComponent) {
  return class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {}
    };

    getMovie() {
      const { id } = this.props
      id && fetchResource('movies', id)
        .then(
          (movie) =>
            this.setState(
              () => ({ movie: movie.data })
            )
        )
    }

    componentDidMount() {
      this.getMovie()
    }

    render() {
      return <WrappedComponent movie={this.state.movie} {...this.props} />
    }
  };

}