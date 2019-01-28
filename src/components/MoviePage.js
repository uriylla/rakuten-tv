import React from 'react'
import { connect } from 'react-redux'
import { getSelectedMovie } from '../selectors/movies'
import { withRouter } from 'react-router'

export class MoviePage extends React.Component {

  constructor (props) {
    super(props)
    this.goToTrailer = this.goToTrailer.bind(this)
  }

  goToTrailer () {
    const { history, id } = this.props;
    history.push(`/movie/${id}/trailer`) 
  }

  render () {
    const { movie } = this.props
    if(!movie) return <div className="movie">Loading...</div>
    var sectionStyle = { backgroundImage: `url(${this.props.movie.images.snapshot})`};
    return (
      <div className="movie">
        <div className="movie__cover"  style={ sectionStyle }>
          <div className="cover-gradient"></div>
          <div className="movie__trailer-btn" onClick={this.goToTrailer}>
            <span className="material-icons">play_circle_filled</span>
            <p>TRAILER</p>
          </div>
        </div>
        <div className="movie__info"></div>
      </div>
    )
  }
}

export default withRouter(MoviePage);