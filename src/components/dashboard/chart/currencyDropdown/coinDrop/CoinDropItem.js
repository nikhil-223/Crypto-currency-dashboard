import React,{useContext} from 'react'
import CoinContext from '../../../../../context/CoinContext';
import './CoinDropItem.scss'  

const CoinDropItem = (props) => {
  const { setCurrencyDropName, theme, setCurrencyListD, currencyList,setCurrency } =
		useContext(CoinContext);
		
  const { currencyName, currencySymbol } = props;

  const handleclick=(e)=>{
    setCurrencyDropName(e.target.innerHTML);
	let inhtml= e.target.innerHTML;
    setCurrency(inhtml.split(" ")[0].toLowerCase());
	setCurrencyListD(currencyList);
  }
  return (
		<div
			className={`coinDropItem bg-droplist-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={handleclick}>
			{`${currencyName} ${currencySymbol}`}
		</div>
	);
}

export default CoinDropItem;