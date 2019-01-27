import React from 'react'
import { connect } from 'react-redux'
import { getSelectedMovie } from '../selectors/movies'

export default class MoviePage extends React.Component {

  render () {
    const { movie } = this.props
    return (
      <div className="movie">
        {movie ? movie.title : 'Loading...'}
      </div>
    )
  }
}