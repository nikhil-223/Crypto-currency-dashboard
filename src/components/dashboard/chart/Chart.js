import React,{useContext} from "react";
import "./Chart.scss";
import { AiOutlineCaretDown } from "react-icons/ai";
import CryptoItem from "./cryptoItem/CryptoItem";
import ChartTypeItem from "./chartTypeItem/ChartTypeItem";
import CoinContext from "../../../context/CoinContext";
import TimePeriodItem from "./timePeriodItem/TimePeriodItem";

const Chart = () => {

	const context = useContext(CoinContext);
	const { coinList, cryptoDropName ,graphList ,chartDropName,timePeriodList,theme} = context;
	
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
	const hideChartType = () => {
		const droplist = document.getElementsByClassName(
			"chart__menu__drop__chart-type__list"
		)[0];
		droplist.style.display = "none";
	};
	const hideCrypto = () => {
		const droplist = document.getElementsByClassName(
			"chart__menu__drop__crypto__list"
		)[0];
		droplist.style.display = "none";
	};
	return (
		<div
			className={`chart bg-${theme === "light" ? "light" : "dark"} text-${
				theme === "light" ? "dark" : "light"
			}`}>
			<div className="chart__menu">
				<div className="chart__menu__time-period">
					{timePeriodList.map((item) => {
						return <TimePeriodItem key={item.time} time={item.time} />;
					})}
				</div>
				<div className="chart__menu__drop">
					<div
						className={`chart__menu__drop__crypto bg-dropdown-${
							theme === "light" ? "light" : "dark"
						} text-${theme === "light" ? "dark" : "light"}`}
						onClick={showCrypto}>
						{cryptoDropName}
						<AiOutlineCaretDown />
						<div
							className="chart__menu__drop__crypto__list"
							style={{ display: "none" }}
							onMouseLeave={hideCrypto}>
							{coinList.map((item) => {
								return <CryptoItem key={item.name} name={item.name} />;
							})}
						</div>
					</div>
					<div
						className={`chart__menu__drop__chart-type bg-dropdown-${
							theme === "light" ? "light" : "dark"
						} text-${theme === "light" ? "dark" : "light"}`}
						onClick={showChartType}>
						{chartDropName}
						<AiOutlineCaretDown />
						<div
							className="chart__menu__drop__chart-type__list"
							style={{ display: "none" }}
							onMouseLeave={hideChartType}>
							{graphList.map((item) => {
								return <ChartTypeItem key={item.graph} graph={item.graph} />;
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="chart__graph"></div>
		</div>
	);
};

export default Chart;
