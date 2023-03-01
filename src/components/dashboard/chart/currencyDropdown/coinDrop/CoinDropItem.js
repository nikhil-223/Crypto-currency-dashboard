import React,{useContext} from 'react'
import CoinContext from '../../../../../context/CoinContext';
import './CoinDropItem.scss'  

const CoinDropItem = (props) => {
  const {
		setCurrencyDropName,
		theme,
		setCurrencyListD,
		currency_and_symbol,
		setCurrency,
		setCurrencySymbol,
	} = useContext(CoinContext);
		
  const { currencyName } = props;

  const handleclick=(e)=>{
    setCurrencyDropName(e.target.innerHTML);
	let inhtml= e.target.innerHTML;
    setCurrency(inhtml.split(" ")[0].toLowerCase());
	setCurrencyListD(currency_and_symbol);
	setCurrencySymbol(e.target.innerHTML.split(" ")[1])
  }
  return (
		<div
			className={`coinDropItem bg-list-item-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={handleclick}>
			{currencyName}
		</div>
	);
}

export default CoinDropItem;