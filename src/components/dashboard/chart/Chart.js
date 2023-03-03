import React, { useContext,useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";

import "./Chart.scss";
import CryptoItem from "./cryptoItem/CryptoItem";
import ChartTypeItem from "./chartTypeItem/ChartTypeItem";
import CoinContext from "../../../context/CoinContext";
import TimePeriodItem from "./timePeriodItem/TimePeriodItem";
import LineChart from "./charts/lineChart/LineChart"; 
import CurrencyDropdown from './currencyDropdown/CurrencyDropdown'

const Chart = () => {
	const context = useContext(CoinContext);
	const {
		coinListD,
		setCoinListD,
		coinList,
		setCryptoDropName,
		chartDropName,
		timePeriodList,
		theme,
		setChartDropName,
		chartTypeList,
		chartTypeListD,
		setChartTypeListD,
		getChartData,
		cryptoDropName,
		chartRange,
		coinName,
		currencyName,
		getCoins
		// chartName,
	} = context;

	

useEffect(() => {

	getChartData();

	// eslint-disable-next-line
},[coinName,currencyName,chartRange]);

	// cryptodrop
const showCrypto = () => {
		const droplist = document.getElementsByClassName(
			"chart__drop__crypto__list"
		)[0];
		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};

	const hideCrypto = () => {
		const droplist = document.getElementsByClassName(
			"chart__drop__crypto__list"
		)[0];
		droplist.style.display = "none";
	};

	const handleFocusCrypto = () => {
		const droplist = document.getElementsByClassName(
			"chart__drop__crypto__list"
		)[0];
		droplist.style.display = "flex";
	};

	const handleChangeCrypto = (e) => {
		setCryptoDropName(e.target.value);
		handleFocusCrypto();
		let rahul = coinList.filter((element) => {
			return element.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? setCoinListD(coinList)
			: setCoinListD(rahul); 
		
	};

	// chart-type-drop 

	const showChartType = () => {
		const droplist = document.getElementsByClassName(
			"chart__drop__chart-type__list"
		)[0];
		droplist.style.display === "none"
			? (droplist.style.display = "flex")
			: (droplist.style.display = "none");
	};
	const hideChartType = () => {
		const droplist = document.getElementsByClassName(
			"chart__drop__chart-type__list"
		)[0];
		droplist.style.display = "none";
	};
	const handleFocusChartType = () => {
		const droplist = document.getElementsByClassName(
			"chart__drop__chart-type__list"
		)[0];
		droplist.style.display = "flex"; 
	};

	const handleChangeChartType = (e) => {
		setChartDropName(e.target.value);
		handleFocusChartType();
		let rahul = chartTypeList.filter((element) => {
			return element.chartType.toLowerCase().includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? setChartTypeListD(chartTypeList)
			: setChartTypeListD(rahul); 
	};
	
	// refresh 

	const reload=()=>{
		getChartData();
		getCoins();
	}
	
// Jsx 

	return (
		<div
			className={`chart bg-${theme === "light" ? "light" : "dark"} text-${
				theme === "light" ? "dark" : "light"
			}`}>
			<div
				className={`chart__phonebar bg-phoneMenu-${
					theme === "light" ? "light" : "dark"
				}`}></div>
			<div className="chart__currency-dropdown">
				<CurrencyDropdown />
			</div>
			<div className="chart__time-period">
				{timePeriodList.map((item) => {
					return <TimePeriodItem key={item.time} time={item.time} />;
				})}
			</div>
			<div className="chart__drop">
				<div
					className={`chart__drop__crypto bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
					<input
						className={`bg-${theme === "light" ? "light" : "dark"} text-${
							theme === "light" ? "dark" : "light"
						}`}
						htmlFor="crypto"
						type="text"
						value={cryptoDropName}
						onFocus={handleFocusCrypto}
						onChange={handleChangeCrypto}
					/>
					<AiOutlineCaretDown onClick={showCrypto} />
					<div
						className={`chart__drop__crypto__list bg-list-${
							theme === "light" ? "light" : "dark"
						} text-${theme === "light" ? "dark" : "light"}`}
						style={{ display: "none" }}
						onClick={showCrypto}
						onMouseLeave={hideCrypto}>
						{coinListD.map((item) => {
							return <CryptoItem key={item.name} name={item.name} />;
						})}
					</div>
				</div>
				<div
					style={{ display: "none" }}
					className={`chart__drop__chart-type bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}>
					<input
						className={`bg-${theme === "light" ? "light" : "dark"} text-${
							theme === "light" ? "dark" : "light"
						}`}
						htmlFor="chartType"
						type="text"
						value={chartDropName}
						onFocus={handleFocusChartType}
						onChange={handleChangeChartType}
					/>
					<AiOutlineCaretDown onClick={showChartType} />
					<div
						className={`chart__drop__chart-type__list bg-list-${
							theme === "light" ? "light" : "dark"
						} text-${theme === "light" ? "dark" : "light"}`}
						style={{ display: "none" }}
						onMouseLeave={hideChartType}
						onClick={showChartType}>
						{chartTypeListD.map((item) => {
							return (
								<ChartTypeItem
									key={item.chartType}
									chartType={item.chartType}
								/>
							);
						})}
					</div>
				</div>
				<div
					className={`chart__drop__reload bg-dropdown-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}
					onClick={reload}>
					<IoMdRefresh />
				</div>
			</div>
			<div className="chart__graph">
				<div className="chart__graph__layer">Wait...</div>
				<LineChart />
			</div>
		</div>
	);
};

export default Chart;
