import React , {useContext,useState} from 'react'
import "./CurrencyDropdown.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CoinDropItem from './coinDrop/CoinDropItem';
import CoinContext from '../../../context/CoinContext'

const CurrencyDropdown = () => {
	const context = useContext(CoinContext)
	const {
		currencyList,
		setCurrencyList,
		setCurrencyDropName,
		currencyDropName,
		theme,
		currencySymbols,
		currencyListD,
		setCurrencyListD,
	} = context;

	
	const showDrop = () => {
		const droplist = document.getElementsByClassName(
			"currency-dropdown__list"
		)[0];
		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};

	const hideDrop=()=>{
		const droplist = document.getElementsByClassName(
			"currency-dropdown__list"
		)[0];

		droplist.style.display = "none";
	}

	const handleFocus=()=>{
		const droplist = document.getElementsByClassName(
			"currency-dropdown__list"
		)[0];
		droplist.style.display = "flex";
	}

	const handleChange=(e)=>{
		setCurrencyDropName(e.target.value)

		let rahul= currencyListD.filter((element)=>{
			return (e.target.value.toLowerCase().charAt(0) === element.charAt(0)) && (
				(e.target.value.toLowerCase().charAt(1) === element.charAt(1)) || (e.target.value.charAt(1)==="")
			);
		})
		console.log(!rahul[0]);
		{!rahul[0] && e.target.value===""?  setCurrencyListD(currencyList):setCurrencyListD(rahul) }
		
	}
  return (
		<>
			<div
				className={`currency-dropdown bg-${
					theme === "light" ? "light" : "dark"
				} text-${theme === "light" ? "dark" : "light"}`}>
				<div className="currency-dropdown__box">
					<input
						className={`bg-${theme === "light" ? "light" : "dark"} text-${
							theme === "light" ? "dark" : "light"
						}`}
						htmlFor="currency"
						type="text"
						value={currencyDropName}
						onFocus={handleFocus}
						onChange={handleChange}
					/>
					<span
						className="currency-dropdown__box__drop-icon"
						onClick={showDrop}>
						<AiOutlineCaretDown />
					</span>
				</div>

				<div
					className={`currency-dropdown__list `}
					onClick={showDrop}
					onMouseLeave={hideDrop}
					style={{ display: "none" }}>
					{currencyListD.map((item, i) => {
						return (
							<CoinDropItem
								key={i}
								currency={currencyListD[i].toUpperCase()}
								currencySymbol={currencySymbols[i]}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default CurrencyDropdown