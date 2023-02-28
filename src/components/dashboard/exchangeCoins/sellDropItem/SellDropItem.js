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
			sellDropName,
			buyDropName,
			setBuyValue,
		} = useContext(CoinContext);
		
 const setOnClick = (e) => {
		setSellDropName(e.target.innerHTML);
		setSellCoinList(coinList);

		let foundsell = coinList.find((element) => element.name === sellDropName);
		let sellval = foundsell.current_price * sellValue;
		let foundbuy = coinList.find((element) => element.name === buyDropName);
		let buyval = sellval / foundbuy.current_price;
		console.log(buyval);
		setBuyValue(buyval.toFixed(3));
 };

 return (
		<div
			className={`sellDropItem bg-droplist-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={setOnClick}>
			{name}
		</div>
 );
}

export default SellDropItem