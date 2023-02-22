import React from "react";
import "./ExchangeCoins.scss";
import { AiOutlineCaretDown } from "react-icons/ai";

const ExchangeCoins = () => {
	return (
		<div className="exchange-coins">
			<div className="exchange-coins__title">Exchange Coins</div>
			<div className="exchange-coins__sell">
				<span>Sell</span>
				<div className="exchange-coins__sell__drop">
					<span>Bitcoin</span>
					<div className="exchange-coins__sell__drop__icon">
						<AiOutlineCaretDown />
					</div>
				</div>
			</div>
			<div className="exchange-coins__buy">
				<span>Buy</span>
				<div className="exchange-coins__buy__drop">
					<span>Ethereum</span>
					<div className="exchange-coins__buy__drop__icon">
						<AiOutlineCaretDown />
					</div>
				</div>
			</div>
			<div className="exchange-coins__enter-sellValue">
				<label htmlFor="sell">Enter value</label>
				<input type="text" htmlFor="sell" placeholder="Avl:0.0002BTC" />
			</div>
			<div className="exchange-coins__get-buyValue">
				<span> 23000Eth</span>
			</div>
			<div className="exchange-coins__exchange">
				<div className="exchange-coins__exchangeBtn">Exchange</div>
			</div>
		</div>
	);
};

export default ExchangeCoins;
