import React from 'react'
import { connect } from 'react-redux'
import { getMovieNameById } from '../selectors/movies'
import LogoRakuten from './LogoRakuten'

export class Header extends React.Component {
  render () {
    const { movie } = this.props;
    return (
    <div className="header">
      <LogoRakuten />
      {movie && <h1 className="header__title">{movie}</h1>}
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { movie: getMovieNameById(state, ownProps.match.params.id) } 
}

export default connect(mapStateToProps)(Header)