import React from 'react';

export default class MovieThumbnail extends React.Component {
  render () {
    const { artwork_url, highlighted_score } = this.props
    const { formatted_amount_of_votes, score } = highlighted_score
    return (
      <div className="thumbnail">
        <div className="thumbnail__cover">
          <div className="thumbnail__border"></div>
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