import React from 'react'

export default function (WrappedComponent, fetchMovie) {
  return class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {}
    };

    getMovie() {
      const { id } = this.props
      id && fetchMovie(id)
        .then(
          (movie) => {
            this.setState(
              () => ({ movie: movie.data })
            ) 
          }
        )
    }

    componentDidMount() {
      this.getMovie()
    }

    render() {
      return <WrappedComponent movie={this.state.movie} {...this.props} />
    }
  };

}