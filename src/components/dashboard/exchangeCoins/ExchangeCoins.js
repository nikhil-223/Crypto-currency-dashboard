import React, { useContext } from "react";
import "./ExchangeCoins.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CoinContext from "../../../context/CoinContext";

const ExchangeCoins = () => {
	const {theme} =useContext(CoinContext)
	return (
		<div
			className={`exchange-coins bg-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}>
			<div className="exchange-coins__title">Exchange Coins</div>
			<div className="exchange-coins__sell">
				<span>Sell</span>
				<div
					className={`exchange-coins__sell__drop bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
					<span>Bitcoin</span>
					<div className="exchange-coins__sell__drop__icon">
						<AiOutlineCaretDown />
					</div>
				</div>
			</div>
			<div className="exchange-coins__buy">
				<span>Buy</span>
				<div
					className={`exchange-coins__buy__drop bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
					<span>Ethereum</span>
					<div className="exchange-coins__buy__drop__icon">
						<AiOutlineCaretDown />
					</div>
				</div>
			</div>
			<div className="exchange-coins__enter-sellValue">
				<label htmlFor="sell">Enter value</label>
				<input
					className={`bg-${theme === "light" ? "light" : "dark"}  text-${
						theme === "light" ? "dark" : "light"
					}`}
					type="text"
					htmlFor="sell"
					placeholder="Avl:0.0002BTC"
				/>
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
