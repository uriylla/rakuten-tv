import React from 'react'

export default function (WrappedComponent, fetchTrailer) {
  return class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {}
    };

    componentDidMount() {
      this.getTrailer()
    }

    getTrailer() {
      const { id } = this.props
      id && fetchTrailer(id)
        .then(
          (trailer) =>
            this.setState(
              () => ({ trailer: trailer.data.stream_infos[0].url })
            )
        )
    }

    render() {
      return <WrappedComponent trailer={this.state.trailer} {...this.props} />
    }
  };

}