import React from 'react';
import { withRouter } from 'react-router'

export class MovieThumbnail extends React.Component {

  constructor(props) {
    super(props)
    this.selectMovie = this.selectMovie.bind(this)
  }

  selectMovie () {
    const { history, id } = this.props
    history.push(`/movie/${id}`)
  }

  render () {
    const { artwork_url, highlighted_score, name } = this.props
    const { formatted_amount_of_votes, score } = highlighted_score
    return (
      <div className="thumbnail">
        <div className="thumbnail__cover">
          <div onClick={this.selectMovie} className="thumbnail__link"></div>
          <img className="thumbnail__image" src={artwork_url}/>
        </div>
        <div className="thumbnail__info">
          <div className="thumbnail__votes">
            <span >
              <span className="material-icons">star</span>
              {formatted_amount_of_votes}
            </span>
          </div>
          <div className="thumbnail__score">
            <span>
              <span className="material-icons">person</span>
              {score}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MovieThumbnail)