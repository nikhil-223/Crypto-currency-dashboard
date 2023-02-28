import React from 'react'
import Chart from './chart/Chart'
import "./Dashboard.scss"
import MarketCap from './marketCap/MarketCap'
import ExchangeCoins from './exchangeCoins/ExchangeCoins'
import Portfolio from './portfolio/Portfolio'


const Dashboard = () => {

  
  
  return (
    <div className="dashboard">
        <Chart />
        <Portfolio/>
        <ExchangeCoins/>
        <MarketCap/>
    </div>
  )
}

export default Dashboard