import React,{useContext} from 'react'
import CoinContext from '../../../../context/CoinContext';
import './CoinDropItem.scss'  

const CoinDropItem = (props) => {
  const { setCurrencyDropName, theme, setCurrencyListD, currencyList } =
		useContext(CoinContext);
  const { currency, currencySymbol } = props;
  const handleclick=(e)=>{
    setCurrencyDropName(e.target.innerHTML);
	console.log(currencyList);
	setCurrencyListD(currencyList);
  }
  return (
		<div
			className={`coinDropItem bg-droplist-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={handleclick}>
			{`${currency} ${currencySymbol}`}
		</div>
	);
}

export default CoinDropItem;