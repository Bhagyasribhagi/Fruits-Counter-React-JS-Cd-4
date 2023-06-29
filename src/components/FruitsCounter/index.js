// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, banana: 0}

  MangoIncreament = () => {
    this.setState(prev => ({mangos: prev.mangos + 1}))
  }

  bananaIncreament = () => {
    this.setState(prev => ({banana: prev.banana + 1}))
  }

  render() {
    const {mangos} = this.state
    const {banana} = this.state

    return (
      <div className="bg-container">
        <div className="bg-container2">
          <h1 className="heading">
            Bob ate <span className="mango">{mangos}</span> mangoes
            <span className="mango"> {banana} </span> bananas
          </h1>
          <div className="img-con">
            <div className="imgD">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button
                className="btn"
                type="button"
                onClick={this.MangoIncreament}
              >
                Eat Mango
              </button>
            </div>
            <div className="imgD">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button
                className="btn"
                type="button"
                onClick={this.bananaIncreament}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
