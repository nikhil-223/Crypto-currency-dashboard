import React from 'react'
import Chart from './chart/Chart'
import CoinSearch from './coinSearch/CoinSearch'
import CurrencyDropdown from './currencyDropdown/CurrencyDropdown'
import MarketCap from './marketCap/MarketCap'
import ExchangeCoins from './exchangeCoins/ExchangeCoins'
import Portfolio from './portfolio/Portfolio'
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard">
        <CurrencyDropdown/>
        <CoinSearch/>
        <Chart/>
        <Portfolio/>
        <ExchangeCoins/>
        <MarketCap/>
    </div>
  )
}

export default Dashboard