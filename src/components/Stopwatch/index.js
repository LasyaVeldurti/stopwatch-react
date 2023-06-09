// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  onStartTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
    }, 1000)
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({timeInSeconds: 0})
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state

    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">StopWatch</h1>
        <div className="main-container">
          <div className="stopwatch">
            <img
              className="stopwatch-img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <div className="timer">
            <h1 className="display-time">{displayTime}</h1>
          </div>
          <div className="btn-container">
            <button
              onClick={this.onStartTimer}
              className="start-btn btn"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.onStopTimer}
              className="stop-btn btn"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onResetTimer}
              className="reset-btn btn"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
