// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    imgUrl: headsImg,
  }

  noOfToss = () => {
    const {Total, Heads, Tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({Total: Total + 1, Heads: Heads + 1, imgUrl: headsImg})
    } else {
      this.setState({Total: Total + 1, Tails: Tails + 1, imgUrl: tailsImg})
    }
  }

  render() {
    const {Total, Heads, Tails, imgUrl} = this.state
    return (
      <div className="background">
        <div className="white-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgUrl} className="img" alt="toss result" />
          <div>
            <button type="button" className="button1" onClick={this.noOfToss}>
              Toss Coin
            </button>
            <div className="align">
              <p>Total:{Total}</p>
              <p>Heads:{Heads}</p>
              <p>Tails:{Tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
