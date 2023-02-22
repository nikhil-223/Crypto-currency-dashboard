import React from 'react'
import "./CurrencyDropdown.scss";
import { AiOutlineCaretDown } from "react-icons/ai";

const CurrencyDropdown = () => {
  return (
		<div className="currency-dropdown">
			<div>
				USD
				<span className="currency-dropdown__drop-icon">
					<AiOutlineCaretDown />
				</span>
			</div>
		</div>
	);
}

export default CurrencyDropdown