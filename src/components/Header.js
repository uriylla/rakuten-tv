import React from 'react'
import { connect } from 'react-redux';
import { getSelectedMovieName } from '../selectors/movies'

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

const mapStateToProps = (state) => {
  return { movie: getSelectedMovieName(state) } 
}

export default connect(mapStateToProps)(Header)