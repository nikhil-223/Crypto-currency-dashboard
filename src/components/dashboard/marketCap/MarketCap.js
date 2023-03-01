import React,{useContext,useEffect} from 'react'
import CoinContext from '../../../context/CoinContext';
import CoinSearch from './coinSearch/CoinSearch';
import './MarketCap.scss'
import MarketItem from './marketItem/MarketItem';

const MarketCap = () => {
	const { getCoins,coinList, theme, currencyDropName } = useContext(CoinContext);
	
	useEffect(() => {
		getCoins();
		// eslint-disable-next-line
	}, [currencyDropName]);
  return (
		<div
			className={`market-cap bg-${theme === "light" ? "light" : "dark"} text-${
				theme === "light" ? "dark" : "light"
			}`}>
			<CoinSearch/>
			<div className="market-cap__items">
				{coinList.map((item,i) => {
					return (
						<MarketItem
							key={item.id}
							name={item.name}
							image={item.image}
							symbol={item.symbol}
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