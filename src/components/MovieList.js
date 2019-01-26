import React from 'react'
import MovieThumbnail from './MovieThumbnail'
import {SliderArrowNext, SliderArrowPrev} from './SliderArrow'
import { connect } from 'react-redux'
import { selectListById } from '../selectors/movies'
import Slider from "react-slick";

export class MovieList extends React.Component {

  state = { activeSlide: 0 }

  render () {
    const current = this.state.activeSlide
    const total = this.props.movies.length
    const prevActive = current > 0
    const nextActive =  current < total - 4
    const settings = {
      draggable: false,
      infinite: false,
      speed: 1000,
      prevArrow: prevActive ? <SliderArrowPrev /> : undefined,
      nextArrow: <SliderArrowNext />,
      slidesToShow: 7.3,
      slidesToScroll: 5,
      afterChange: (index) => this.setState({activeSlide: index}),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6.5,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1
          }
        }
      ]
    }
    const { name, movies } = this.props
    return (
      <div className="movie-list">
        <h1 className="movie-list__title">{name}</h1>
        <Slider {...settings} >
          {movies.map( movie => <MovieThumbnail key={movie.id} {...movie} /> )}
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = (state, {id}) => ({ ...selectListById(state.lists, id) })

export default connect(mapStateToProps)(MovieList)