import React, { useContext } from 'react'
import CoinContext from '../../../context/CoinContext';
import PieChart from './pieChart/PieChart';
import "./Portfolio.scss";

const Portfolio = () => {
	const {theme}= useContext(CoinContext);
  return (
		<div
			className={`portfolio bg-${theme === "light" ? "light" : "dark"} text-${
				theme === "light" ? "dark" : "light"
			}`}>
			<div className="portfolio__head">
				<div className="portfolio__head__title">Portfolio</div>
				<div className="portfolio__head__value">
					<h4 style={{ display: "inline" }}>Total value :</h4>
					<span>1000$</span>
				</div>
			</div>
			<div className="portfolio__data">
				<div className="portfolio__data__circle">
					<PieChart/>
				</div>
				
			</div>
		</div>
	);
}

export default Portfolio