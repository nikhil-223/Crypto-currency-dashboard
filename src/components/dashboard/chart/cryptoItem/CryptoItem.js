import React,{useContext} from 'react'
import CoinContext from '../../../../context/CoinContext';
import './CryptoItem.scss'

const CryptoItem = (props) => {
  const {name}=props;
  const {setCryptoDropName,theme,setCoinListD,coinList } = useContext(CoinContext)
  const setOnClick=(e)=>{
    setCryptoDropName(e.target.innerHTML);
	setCoinListD(coinList) 
  }
  
  return (
		<div
			className={`cryptoItem bg-droplist-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={setOnClick}>
			{name}
		</div>
	);
}

export default CryptoItem