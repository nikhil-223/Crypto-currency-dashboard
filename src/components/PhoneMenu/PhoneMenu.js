import React, { useContext } from 'react'
import "./PhoneMenu.scss"
import { AiFillHome} from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { RiPieChart2Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";
import CoinContext from '../../context/CoinContext'

const PhoneMenu = () => {
    const {theme} = useContext(CoinContext)


	const exchange_show=()=>{
		document.querySelector(".exchange-coins").style.zIndex='90';
		document.querySelector(".portfolio").style.zIndex='-10';
	}
	const portfolio_show=()=>{
		document.querySelector(".portfolio").style.zIndex='90';
		document.querySelector(".exchange-coins").style.zIndex='-10';
	}
	const market_show=()=>{
		document.querySelector(".exchange-coins").style.zIndex='-10';
		document.querySelector(".portfolio").style.zIndex='-10';
	}
  return (
		<div
			className={`phoneMenu bg-phoneMenu-${
				theme === "dark" ? "dark" : "light"
			} text-${theme === "dark" ? "light" : "dark"}`}>
			<div className="phoneMenu__item" >
				<div className="phoneMenu__item__icon phoneMenu__item__icon-home">
					<AiFillHome />
				</div>
				<span>Home</span>
			</div>
			<div className="phoneMenu__item" onClick={market_show}>
				<div className="phoneMenu__item__icon phoneMenu__item__icon-market">
					<BsFillBarChartFill />
				</div>
				<span>Markets</span>
			</div>
			<div className="phoneMenu__item" onClick={exchange_show}>
				<div className="phoneMenu__item__icon phoneMenu__item__icon-earn">
					<FaCoins />
				</div>
				<span>Exchange</span>
			</div>
			<div className="phoneMenu__item" onClick={portfolio_show}>
				<div className="phoneMenu__item__icon phoneMenu__item__icon-portfolio">
					<RiPieChart2Fill />
				</div>
				<span>Portfolio</span>
			</div>
		</div>
	);
}

export default PhoneMenu