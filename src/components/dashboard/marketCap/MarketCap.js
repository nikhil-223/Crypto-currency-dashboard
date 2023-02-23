import React from 'react'
import './MarketCap.scss'
import MarketItem from './marketItem/MarketItem';

const MarketCap = () => {
  return (
		<div className="market-cap">
			<div className="market-cap__title">Cryptocurrency by Market Cap</div>
			<div className="market-cap__items">
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
				<MarketItem/>
			</div>
		</div>
	);
}

export default MarketCap