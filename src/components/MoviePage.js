import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { unselectMovie } from '../actions/creators/movies'
import { getSelectedMovie } from '../selectors/movies'

export default class HomePage extends React.Component {
  render () {
    const { title } = this.props.match.params
    return (
      <div className="movie">
        {title}
      </div>
    )
  }
}