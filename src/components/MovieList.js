import React from 'react'
import MovieThumbnail from './MovieThumbnail'
import { connect } from 'react-redux'
import { selectListById } from '../selectors/movies'
import Slider from "react-slick";

export class MovieList extends React.Component {
  render () {
    const settings = {
      draggable: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 6.5,
      slidesToScroll: 6
    }
    const { list } = this.props
    return (
      <div className="movie-list">
        <h1 className="movie-list__title">{list.name}</h1>
        <Slider {...settings}>
          {list.movies.map( movie => <MovieThumbnail key={movie.id} {...movie} /> )}
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = (state, {id}) => ({
  list: selectListById(state.lists, id)
})

export default connect(mapStateToProps)(MovieList)