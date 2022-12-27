// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  isIncrement = () => {
    this.setState(prevState => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    const isEven = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          <p className="head">Count is {isEven}</p>
          <button className="button" type="button" onClick={this.isIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
