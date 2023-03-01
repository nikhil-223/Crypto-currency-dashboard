import React,{useContext} from "react";
import CoinContext from "../../../../context/CoinContext";
import './BuyDropItem.scss'

const BuyDropItem = (props) => {
	const {
		coinList,
		setBuyDropName,
		setBuyCoinList,
		theme,
		sellValue,
		sellDropName,
		buyDropName,
		setBuyValue,
	} = useContext(CoinContext);
	const {name}= props;
	const setOnClick = (e) => {
		setBuyDropName(e.target.innerHTML);
		setBuyCoinList(coinList);

		let foundsell = coinList.find((element) => element.name === sellDropName);
		let sellval = foundsell.current_price * sellValue;
		let foundbuy = coinList.find((element) => element.name === e.target.innerHTML);
		let buyval = sellval / foundbuy.current_price;
		console.log(buyval);
		setBuyValue(buyval.toFixed(3));
	};

	return (
		<div
			className={`buyDropItem bg-droplist-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={setOnClick}>
			{name}
		</div>
	);
};

export default BuyDropItem;
