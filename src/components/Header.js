import React from 'react'
import { connect } from 'react-redux';
import { getMovieNameById } from '../selectors/movies'
import { withRouter } from 'react-router'

export class Header extends React.Component {
  render () {
    const { movie } = this.props;
    return (
    <div className="header">
      <h1>{movie || 'Rakuten TV'}</h1>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { movie: getMovieNameById(state, ownProps.match.params.id) } 
}

export default connect(mapStateToProps)(withRouter(Header))