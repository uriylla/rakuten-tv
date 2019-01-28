import React from 'react'
import { withRouter } from 'react-router'

export class TrailerPage extends React.Component {

  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    this.player = videojs('trailer-player', {
      autoplay: true,
      children: [
        'bigPlayButton',
        'controlBar'
      ],
      controls: true
    })
  }

  componentDidUpdate () {
    const { trailer } = this.props
    trailer && this.loadVideo(trailer)
  }

  componentWillUnmount () {
    this.player.dispose()
  }

  goBack () {
    const { history, id } = this.props
    history.push(`/movie/${id}`)
  }

  loadVideo (videoUrl) {
    this.player.src({
      src: videoUrl,
      type: 'application/dash+xml'
    });
    this.player.play();
  }

  render () {
    const { trailer } = this.props
    return (
      <div className="trailer-page">
        <span className="trailer-page__back material-icons" onClick={this.goBack} >arrow_back_ios</span>
        <video className="video-js vjs-big-play-centered" id="trailer-player"></video>
      </div>
    )
  }
}

export default withRouter(TrailerPage)