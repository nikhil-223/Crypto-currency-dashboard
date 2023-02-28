import React , {useContext,useEffect} from 'react'
import "./CurrencyDropdown.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CoinDropItem from './coinDrop/CoinDropItem';
import CoinContext from '../../../../context/CoinContext';

const CurrencyDropdown = () => {
	const context = useContext(CoinContext)
	const {
		currencyList,
		setCurrencyDropName,
		currencyDropName,
		theme,
		currencySymbols,
		currencyListD,
		setCurrencyListD,
		getCurrencies 
	} = context;

	useEffect(() => {
		getCurrencies();
		// eslint-disable-next-line
	},[])

	
	
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
		handleFocus();
		let rahul= currencyList.filter((element)=>{
			return element.toLowerCase().includes(e.target.value.toLowerCase());
		})
		console.log(rahul); 
		!rahul[0] || e.target.value===""?  setCurrencyListD(currencyList):setCurrencyListD(rahul) 
		
	}
  return (
		<>
			<div
				className={`currency-dropdown `}>
				<div
					className={`currency-dropdown__box bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
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
								currencyName={currencyListD[i].toUpperCase()}
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