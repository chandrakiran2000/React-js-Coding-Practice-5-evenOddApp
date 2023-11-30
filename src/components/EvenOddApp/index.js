// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  // console.log(Math.floor(Math.random() * 201))
  state = {number: 0}

  check = () => {
    this.setState(prevState => ({
      number: prevState.number + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {number} = this.state
    const evenOddText = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg">
        <div className="bg-card">
          <h1 className="heading">Count {number}</h1>
          <p className="para">Count is {evenOddText}</p>
          <button onClick={this.check} className="btn" type="button">
            Increment
          </button>
          <p className="last">*INcrease By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
