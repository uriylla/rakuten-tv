import React from 'react'

export default class Header extends React.Component {
  render () {
    const { movie } = this.props;
    return (
    <div className="header">
      <h1>{movie || 'Rakuten TV'}</h1>
    </div>
    )
  }
}