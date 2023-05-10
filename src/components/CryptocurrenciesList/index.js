// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading"> Coin Type </p>
      <div className="usd-and-euro-heading">
        <p className="list-coin-heading">USD</p>
        <p className="list-coin-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container" data-testid="loader">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              cryptocurrencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container" data-testid="loader">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
