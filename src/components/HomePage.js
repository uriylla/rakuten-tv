import React from 'react'
import MovieList from './MovieList'
import { connect } from 'react-redux'
import { getLoadedLists } from '../selectors/movies'

export class HomePage extends React.Component {
  render () {
    const { lists } = this.props
    return (
      <div className="home">
        {lists && lists.map(list => <MovieList key={list} id={list} /> )}
      </div>
    )
  }
}

const mapStateToProps = (state, {name}) => ({
  lists: getLoadedLists(state.lists)
})

export default connect(mapStateToProps)(HomePage)