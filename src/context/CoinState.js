import React, { useState } from "react";
import CoinContext from "./CoinContext";

const CoinState = (props) => {
	const [coinList, setCoinList] = useState([]);
	const [coinListD, setCoinListD] = useState(coinList);

	const [chartTypeList, setChartTypeList] = useState([
		{ chartType: "price-time" },
		{ chartType: "price-time1" },
		{ chartType: "price-time2" },
		{ chartType: "price-time3" },
		{ chartType: "price-time4" },
	]);
	const [chartTypeListD, setChartTypeListD] = useState(chartTypeList);

	const [currencyList, setCurrencyList] = useState([]);
	const [currencyListD, setCurrencyListD] = useState(currencyList);
	const [currencySymbols, setCurrencySymbols] = useState([
		"$",
		"Ξ",
		"Ł",
		"BCH",
		"BNB",
		"EOS",
		"XRP",
		"XLM",
		"LINK",
		"DOT",
		"YFI",
		"$",
		"د.إ",
		"$",
		"$",
		"৳",
		"د.ب",
		"$",
		"R$",
		"$",
		"CHF",
		"$",
		"¥",
		"Kč",
		"kr",
		"€",
		"£",
		"$",
		"Ft",
		"Rp",
		"₪",
		"₹",
		"¥",
		"₩",
		"د.ك",
		"රු",
		"K",
		"$",
		"RM",
		"₦",
		"kr",
		"$",
		"₱",
		"₨",
		"zł",
		"₽",
		"ر.س",
		"kr",
		"$",
		"฿",
		"₺",
		"NT$",
		"₴",
		"Bs.",
		"₫",
		"R",
		"XDR",
		"XAG",
		"XAU",
		"bits",
		"sats",
	]);

	const [timePeriod, setTimePeriod] = useState("1H");
	const [timePeriodList, setTimePeriodList] = useState([
		{ time: "1H" },
		{ time: "1D" },
		{ time: "1W" },
		{ time: "1M" },
		{ time: "6M" },
		{ time: "1Y" },
	]);

	const [cryptoDropName, setCryptoDropName] = useState("Bitcoin");
	const [chartDropName, setChartDropName] = useState("Chart Type");
	const [currencyDropName, setCurrencyDropName] = useState("INR ₹");
	const [currency, setCurrency] = useState("inr");

	const [theme, setTheme] = useState("dark");
	const [chartData, setChartData] = useState({ prices: [] });
	const [chartRange, setChartRange] = useState("");
	// const [rangeToPoint, setRangeToPoint] = useState()

	const getChartData = async () => {
		let subtime;
		switch (chartRange) {
			case "1H":
				subtime = 60 * 60 * 1000;
				break;
			case "1D":
				subtime = 24 * 60 * 60 * 1000;
				break;
			case "1W":
				subtime = 7 * 24 * 60 * 60  * 1000;
				break;
			case "1M":
				subtime = 31 * 24  * 60 * 60 * 1000;
				break;
			case "6M":
				subtime = 24 * 60 * 60  * 31 * 6 * 1000;
				break;
			case "1Y":
				subtime = 365*  24 * 60 * 60 * 1000;
				break;
			default:
				subtime =  60 *  60 * 1000;
				break;
		}
		const rangeto = Date.now();
		let rangefrom = rangeto - subtime;
		let found ='bitcoin'
		let foundelement = coinList.find((element) => element.name === cryptoDropName);
		 found= foundelement!==undefined? foundelement.id:'bitcoin';
		// API Call for chart data
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/${
				found
			}/market_chart/range?vs_currency=${currency}&from=${Math.floor(
				rangefrom / 1000
			)}&to=${Math.floor(rangeto / 1000)}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const json = await response.json();
		setChartData(json);

		// console.log(json);
	};

	const getCoins = async () => {
		// 	// API Call for coins
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const json = await response.json();
		setCoinList(json);
		setCoinListD(json);
	};

	const getCurrencies = async () => {
		// API Call

		const response = await fetch(
			`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const json = await response.json();
		setCurrencyList(json);
		setCurrencyListD(json);
	};

	return (
		<CoinContext.Provider
			value={{
				coinList,
				getCoins,
				getChartData,
				getCurrencies,
				cryptoDropName,
				setCryptoDropName,
				currencyList,
				setCurrencyList,
				currencySymbols,
				chartDropName,
				setChartDropName,
				currencyDropName,
				currency,
				setCurrency,
				setCurrencyDropName,
				timePeriodList,
				setTimePeriodList,
				timePeriod,
				setTimePeriod,
				theme,
				setTheme,
				currencyListD,
				setCurrencyListD,
				coinListD,
				setCoinListD,
				chartTypeList,
				setChartTypeList,
				chartTypeListD,
				setChartTypeListD,
				chartRange,
				setChartRange,
				chartData,
				setChartData,
				setCurrencySymbols,
			}}>
			{props.children}
		</CoinContext.Provider>
	);
};

export default CoinState;
