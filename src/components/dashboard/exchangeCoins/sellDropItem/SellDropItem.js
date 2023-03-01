import React,{useContext} from 'react'
import CoinContext from '../../../../context/CoinContext';
import './SellDropItem.scss'

const SellDropItem = (props) => {
    const {name}=props
    const {
			coinList,
			setSellDropName,
			setSellCoinList,
			theme,
			sellValue,
			buyDropName,
			setBuyValue,
		} = useContext(CoinContext);
		
 const setOnClick = (e) => {
		setSellDropName(e.target.innerHTML);
		setSellCoinList(coinList);

		let foundsell = coinList.find((element) => element.name === e.target.innerHTML);
		console.log(e.target.value);

		let sellval = foundsell.current_price * sellValue;
		let foundbuy = coinList.find((element) => element.name === buyDropName);
		let buyval = sellval / foundbuy.current_price;
		setBuyValue(buyval.toFixed(3));
 };

 return (
		<div
			className={`sellDropItem bg-list-item-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={setOnClick}>
			{name}
		</div>
 );
}

export default SellDropItem