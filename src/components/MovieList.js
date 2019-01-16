import React from 'react'
import MovieThumbnail from './MovieThumbnail'
import {SliderArrowNext, SliderArrowPrev} from './SliderArrow'
import { connect } from 'react-redux'
import { selectListById } from '../selectors/movies'
import Slider from "react-slick";

export class MovieList extends React.Component {

  render () {
    const settings = {
      draggable: false,
      infinite: false,
      speed: 1000,
      prevArrow: <SliderArrowPrev />,
      nextArrow: <SliderArrowNext />,
      slidesToShow: 6.5,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2
          }
        }
      ]
    }
    const { list } = this.props
    return (
      <div className="movie-list">
        <h1 className="movie-list__title">{list.name}</h1>
        <Slider {...settings} >
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