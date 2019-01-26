import React from 'react'
import MovieList from './MovieList'
import { connect } from 'react-redux'
import { selectLists, getSelectedMovie } from '../selectors/movies'
import { withRouter } from 'react-router'

export class HomePage extends React.Component {

  componentDidUpdate (prevProps) {
    const { history, selectedMovie } = this.props
    if (!selectedMovie) return;
    history.push(`/movie/${selectedMovie.id}`)
  }

  render () {
    const { lists } = this.props
    return (
      <div className="home">
        {lists && lists.map(({id}) => <MovieList key={id} id={id} /> )}
      </div>
    )
  }
}

const mapStateToProps = (state, {name}) => ({
  lists: selectLists(state.lists),
  selectedMovie: getSelectedMovie(state)
})

export default connect(mapStateToProps)(withRouter(HomePage))