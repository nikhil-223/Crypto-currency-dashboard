import React from 'react'
import './Chart.scss'
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import CryptoItem from './cryptoItem/CryptoItem';
import ChartTypeItem from './chartTypeItem/ChartTypeItem';



const Chart = () => {
	
	const showCrypto = () => {
		const droplist = document.getElementsByClassName(
			"chart__menu__drop__crypto__list"
		)[0];

		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};
	
	const showChartType = () => {
		const droplist = document.getElementsByClassName(
			"chart__menu__drop__chart-type__list"
		)[0];

		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};
  return (
		<div className="chart">
			<div className="chart__menu">
				<div className="chart__menu__time-period">
					<div className="chart__menu__time-period__item">1D</div>
					<div className="chart__menu__time-period__item">1W</div>
					<div className="chart__menu__time-period__item">1M</div>
					<div className="chart__menu__time-period__item">6M</div>
					<div className="chart__menu__time-period__item">1Y</div>
					<div className="chart__menu__time-period__item">
						<BsFillCalendarWeekFill />
					</div>
				</div>
				<div className="chart__menu__drop">
					<div className="chart__menu__drop__crypto " onClick={showCrypto}>
						Cryptocurrency
						<AiOutlineCaretDown />
						<div
							className="chart__menu__drop__crypto__list"
							style={{ display: "none" }}>
							<CryptoItem />
							<CryptoItem />
							<CryptoItem />
							<CryptoItem />
							<CryptoItem />
						</div>
					</div>
					<div className="chart__menu__drop__chart-type" onClick={showChartType}>
						Chart type
						<AiOutlineCaretDown />
						<div
							className="chart__menu__drop__chart-type__list"
							style={{ display: "none" }}>
							<ChartTypeItem/>
							<ChartTypeItem/>
							<ChartTypeItem/>
							<ChartTypeItem/>
							<ChartTypeItem/>
							<ChartTypeItem/>
							<ChartTypeItem/>
							<ChartTypeItem/>
						</div>
					</div>
				</div>
			</div>
			<div className="chart__graph"></div>
		</div>
	);
}

export default Chart