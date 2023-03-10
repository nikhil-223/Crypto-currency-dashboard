import React, { useContext } from "react";
import CoinContext from "../../../../context/CoinContext";
import "./MarketItem.scss";

const MarketItem = (props) => {
	const {
		name,
		current_price,
		market_cap_change_percentage_24h,
		image,
		symbol,
	} = props;
	const { currencySymbol, setCryptoDropName, setPieItemAdd ,setCoinName} =
		useContext(CoinContext);
	const market_cap_change_percentage_24h_toString = `${market_cap_change_percentage_24h}`;

	const handleClick = (e) => {
		const element = e.target;
		const market_item = element.closest(".market-item");
		setCoinName(market_item.getAttribute("data-tracker"));
		setCryptoDropName(market_item.getAttribute("data-tracker"));
		setPieItemAdd(market_item.getAttribute("data-tracker"));
	};

	return (
		<div className="market-item" onClick={handleClick} data-tracker={name}>
			<div className="market-item__detail">
				<div className="market-item__detail__image">
					<img src={image} alt="coinimg " />
				</div>
				<div className="market-item__detail__crypto">
					<div className="market-item__detail__crypto__name">{name}</div>
					<div className="market-item__detail__crypto__symbol">{symbol}</div>
				</div>
			</div>

			<div className={`market-item__value`}>
				<div className="market-item__detail__value__current_price">
					{`${currencySymbol} ${current_price}`}
				</div>

				<div
					className={`market-item__detail__value__change text-change-${
						market_cap_change_percentage_24h_toString.slice(0, 1) === "-"
							? "minus"
							: "plus"
					}`}>
					{market_cap_change_percentage_24h_toString.slice(0, 1) === "-"
						? ` ${market_cap_change_percentage_24h_toString} %`
						: `${"+".concat(market_cap_change_percentage_24h_toString)} %`}
				</div>
			</div>
		</div>
	);
};

export default MarketItem;
