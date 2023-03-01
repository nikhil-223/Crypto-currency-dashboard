import React, { useContext} from "react";
import "./ExchangeCoins.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CoinContext from "../../../context/CoinContext";
import SellDropItem from "./sellDropItem/SellDropItem";
import BuyDropItem from "./buyDropItem/BuyDropItem";

const ExchangeCoins = () => {
	const {
		theme,
		buyDropName,
		setBuyDropName,
		sellDropName,
		setSellDropName,
		coinList,
		sellCoinList,
		setSellCoinList,
		buyCoinList,
		setBuyCoinList,
		buyValue,
		setBuyValue,
		sellValue,
		setSellValue,
	} = useContext(CoinContext);

	// sell dropdown
	const showSell = () => {
		const droplist = document.getElementsByClassName(
			"exchange-coins__sell__drop__list"
		)[0];
		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};
	const hideSell = () => {
		const droplist = document.getElementsByClassName(
			"exchange-coins__sell__drop__list"
		)[0];
		droplist.style.display = "none";
	};
	const handleFocusSell = () => {
		const droplist = document.getElementsByClassName(
			"exchange-coins__sell__drop__list"
		)[0];
		droplist.style.display = "flex";
	};

	const handleChangeSell = (e) => {
		setSellDropName(e.target.value);
		handleFocusSell();
		let rahul = coinList.filter((element) => {
			return element.name
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? setSellCoinList(coinList)
			: setSellCoinList(rahul);
	}; 
	// buy dropdown 
	const showBuy = () => {
		const droplist = document.getElementsByClassName(
			"exchange-coins__buy__drop__list"
		)[0];
		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};
	const hideBuy = () => {
		const droplist = document.getElementsByClassName(
			"exchange-coins__buy__drop__list"
		)[0];
		droplist.style.display = "none";
	};
	
	const handleFocusBuy = () => {
		const droplist = document.getElementsByClassName(
			"exchange-coins__buy__drop__list"
		)[0];
		droplist.style.display = "flex";
	};

	const handleChangeBuy = (e) => {
		setBuyDropName(e.target.value);
		handleFocusBuy();
		let rahul = coinList.filter((element) => {
			return element.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? setBuyCoinList(coinList)
			: setBuyCoinList(rahul);
	}; 
	
	// buy input 
	const handleSellChange=(e)=>{
		setSellValue(e.target.value)
		let foundsell= coinList.find((element) => element.name === sellDropName);
		let sellval= foundsell.current_price * e.target.value;
		let foundbuy = coinList.find((element) => element.name === buyDropName);
		let buyval= sellval / foundbuy.current_price ;
		setBuyValue(buyval.toFixed(3));
	};
	 
	

	// useEffect(() => {
	//   let foundsell = coinList.find((element) => element.name === sellDropName);
	// 	let sellval = foundsell.current_price * sellValue;
	// 	let foundbuy = coinList.find((element) => element.name === buyDropName);
	// 	let buyval = sellval / foundbuy.current_price;
	// 	setBuyValue(buyval);
	// }, [])
	
	return (
		<div
			className={`exchange-coins bg-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}>
			<div className="exchange-coins__title">Exchange Coins</div>
			<div className="exchange-coins__sell text-change-minus">
				<span>Sell</span>
				<div
					className={`exchange-coins__sell__drop bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
					<input
						className={`bg-${theme === "light" ? "light" : "dark"} text-${
							theme === "light" ? "dark" : "light"
						}`}
						htmlFor="sell"
						type="text"
						value={sellDropName}
						onFocus={handleFocusSell}
						onChange={handleChangeSell}
					/>
					<div className="exchange-coins__sell__drop__icon" onClick={showSell}>
						<AiOutlineCaretDown />
					</div>
					<div
						className={`exchange-coins__sell__drop__list bg-list-${
							theme === "light" ? "light" : "dark"
						} text-${theme === "light" ? "dark" : "light"}`}
						style={{ display: "none" }}
						onClick={showSell}
						onMouseLeave={hideSell}>
						{sellCoinList.map((item) => {
							return <SellDropItem key={item.name} name={item.name} />;
						})}
					</div>
				</div>
			</div>
			<div className="exchange-coins__buy text-change-plus">
				<span>Buy</span>
				<div
					className={`exchange-coins__buy__drop bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
					<input
						className={`bg-${theme === "light" ? "light" : "dark"} text-${
							theme === "light" ? "dark" : "light"
						}`}
						htmlFor="buy"
						type="text"
						value={buyDropName}
						onFocus={handleFocusBuy}
						onChange={handleChangeBuy}
					/>
					<div className="exchange-coins__buy__drop__icon" onClick={showBuy}>
						<AiOutlineCaretDown />
					</div>
					<div
						className={`exchange-coins__buy__drop__list bg-list-${
							theme === "light" ? "light" : "dark"
						} text-${theme === "light" ? "dark" : "light"}`}
						style={{ display: "none" }}
						onClick={showBuy}
						onMouseLeave={hideBuy}>
						{buyCoinList.map((item) => {
							return <BuyDropItem key={item.name} name={item.name} />;
						})}
					</div>
				</div>
			</div>
			<div className="exchange-coins__enter-sellValue">
				<label htmlFor="sell">Enter value</label>
				<input
					className={`bg-${theme === "light" ? "light" : "dark"}  text-${
						theme === "light" ? "dark" : "light"
					}`}
					type="text"
					htmlFor="sell"
					onChange={handleSellChange}
					placeholder="Avl:0.0002BTC"
					value={sellValue}
				/>
			</div>
			<div className="exchange-coins__get-buyValue">
				<label htmlFor="sell">Buy value</label>
				<div>{buyValue}</div>
			</div>
			{/* <div className="exchange-coins__exchange">
				<div className="exchange-coins__exchangeBtn">Exchange</div>
			</div> */}
		</div>
	);
};

export default ExchangeCoins;
