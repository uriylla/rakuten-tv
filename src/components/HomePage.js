import React from 'react'
import MovieList from './MovieList'
import { connect } from 'react-redux'
import { selectLists } from '../selectors/movies'

export class HomePage extends React.Component {
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
  lists: selectLists(state.lists)
})

export default connect(mapStateToProps)(HomePage)