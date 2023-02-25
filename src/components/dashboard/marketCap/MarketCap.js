import React,{useContext} from 'react'
import CoinContext from '../../../context/CoinContext';
import './MarketCap.scss'
import MarketItem from './marketItem/MarketItem';

const MarketCap = () => {
	const { coinList, theme, currencyDropName } = useContext(CoinContext);
  return (
		<div
			className={`market-cap bg-${theme === "light" ? "light" : "dark"} text-${
				theme === "light" ? "dark" : "light"
			}`}>
			<div className="market-cap__title">Cryptocurrency by Market Cap</div>
			<div className="market-cap__items">
				{coinList.map((item,i) => {
					return (
						<MarketItem
							key={item.name}
							name={item.name}
							image={item.image}
							symbol={item.symbol}
							currencySymbol={currencyDropName.split(" ")[1]}
							current_price={item.current_price}
							market_cap_change_percentage_24h={
								item.market_cap_change_percentage_24h
							}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default MarketCap