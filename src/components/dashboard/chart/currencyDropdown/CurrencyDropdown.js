import React , {useContext,useEffect} from 'react'
import "./CurrencyDropdown.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CoinDropItem from './coinDrop/CoinDropItem';
import CoinContext from '../../../../context/CoinContext';

const CurrencyDropdown = () => {
	const context = useContext(CoinContext)
	const {
		setCurrencyDropName,
		currencyDropName,
		theme,
		currencyListD,
		setCurrencyListD,
		getCurrencies,
		currency_and_symbol,
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
		console.log(currency_and_symbol); 
		let rahul = currency_and_symbol.filter((element) => {
			return element.toLowerCase().includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? setCurrencyListD(currency_and_symbol)
			: setCurrencyListD(rahul); 
		
	}
  return (
		<>
			<div className={`currency-dropdown `}>
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
					className={`currency-dropdown__list bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}
					onClick={showDrop}
					onMouseLeave={hideDrop}
					style={{ display: "none" }}>
					{currencyListD.map((item, i) => {
						return <CoinDropItem key={i} currencyName={item.toUpperCase()} />;
					})}
				</div>
			</div>
		</>
	);
}

export default CurrencyDropdown