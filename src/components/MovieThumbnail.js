import React from 'react';

export default class MovieThumbnail extends React.Component {
  render () {
    const { artwork_url, score } = this.props
    return (
      <div className="movie">
        <img className="movie__image" src={artwork_url}/>
      </div>
    )
  }
}