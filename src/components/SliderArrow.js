import React from 'react'

export class SliderArrowPrev extends React.Component {
  render () {
    const { className, style, onClick } = this.props;
    const styles = {
      display: "flex",
      background: "linear-gradient(to right,rgba(23,23,23,.95) 0,transparent 100%)",
      height: "102%",
      padding: "0px 20px 0px 20px",
      width: "4%",
      left: "0px",
      zIndex: "2",
      justifyContent: "flex-start",
      alignItems: "center"
    }
    return (
      <div
        className={className}
        style={{...styles}}
        onClick={onClick}
      />
    )
  }
}

export class SliderArrowNext extends React.Component {
  render () {
    const { className, style, onClick } = this.props;
    const styles = {
      display: "flex",
      background: "linear-gradient(to left,rgba(23,23,23,.95) 0,transparent 100%)",
      height: "102%",
      padding: "0px 20px 0px 20px",
      width: "4%",
      right: "0px",
      zIndex: "2",
      justifyContent: "flex-end",
      alignItems: "center"
    }
    return (
      <div
        className={className}
        style={{...styles}}
        onClick={onClick}
      />
    )
  }
}