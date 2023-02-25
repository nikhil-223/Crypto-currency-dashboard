import React,{useContext} from 'react'
import CoinContext from '../../../../context/CoinContext';
import './CryptoItem.scss'

const CryptoItem = (props) => {
  const {name}=props;
  const context = useContext(CoinContext)
  const {setCryptoDropName,theme } = context;
  const setOnClick=(e)=>{
    setCryptoDropName(e.target.innerHTML); 
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