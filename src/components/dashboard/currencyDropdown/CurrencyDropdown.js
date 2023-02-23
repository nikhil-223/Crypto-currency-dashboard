import React from 'react'
import "./CurrencyDropdown.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CoinDropItem from './coinDrop/CoinDropItem';

const CurrencyDropdown = () => {
	const showDrop=()=>{
		const droplist = document.getElementsByClassName(
			"currency-dropdown__list"
		)[0];

		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	}
  return (
	<>
		<div className="currency-dropdown">
			<div className='currency-dropdown__box' onClick={showDrop}>
				USD
				<span className="currency-dropdown__box__drop-icon">
					<AiOutlineCaretDown />
				</span>
			</div>
			<div className="currency-dropdown__list" style={{display:"none"}}>
					<CoinDropItem />
					<CoinDropItem />
					<CoinDropItem />
					<CoinDropItem />
					<CoinDropItem />
					<CoinDropItem />
					<CoinDropItem />
			</div>
		</div>
					
	</>
	);
}

export default CurrencyDropdown