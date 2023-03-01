import React, { useState } from "react";
import CoinContext from "./CoinContext";

const CoinState = (props) => {
	const [coinList, setCoinList] = useState([]);
	const [coinListD, setCoinListD] = useState(coinList);
	const [searchList, setSearchList] = useState(coinList)
	const [searchListD, setSearchListD] = useState(searchList)
	const [sellCoinList, setSellCoinList] = useState(coinList);
	const [buyCoinList, setBuyCoinList] = useState(coinList);
	
	const [chartTypeList, setChartTypeList] = useState([
		{ chartType: "price-time" },
		{ chartType: "price-time1" },
		{ chartType: "price-time2" },
		{ chartType: "price-time3" },
		{ chartType: "price-time4" },
	]);
	const [chartTypeListD, setChartTypeListD] = useState(chartTypeList);

	const [currencyList, setCurrencyList] = useState([]);
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
	
	const [currencyListD, setCurrencyListD] = useState(currencyList);
	const [timePeriod, setTimePeriod] = useState("1H");
	const [timePeriodList, setTimePeriodList] = useState([
		{ time: "1H" },
		{ time: "1D" },
		{ time: "1W" },
		{ time: "1M" },
		{ time: "6M" },
		{ time: "1Y" },
	]);
	
	const [currencyDropName, setCurrencyDropName] = useState("INR ₹");
	const [cryptoDropName, setCryptoDropName] = useState("Bitcoin");
	const [chartDropName, setChartDropName] = useState("Chart Type");
	const [searchDropName, setSearchDropName] = useState("");
	const [sellDropName, setSellDropName] = useState("Bitcoin");
	const [buyDropName, setBuyDropName] = useState("Ethereum");
	const [currency, setCurrency] = useState("inr");
	const [sellValue, setSellValue] = useState("");
	const [currencySymbol, setCurrencySymbol] = useState("₹");
	const [currency_and_symbol, setCurrency_and_symbol] = useState([])
	const [buyValue, setBuyValue] = useState("0");

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
				subtime = 7 * 24 * 60 * 60 * 1000;
				break;
			case "1M":
				subtime = 31 * 24 * 60 * 60 * 1000;
				break;
			case "6M":
				subtime = 24 * 60 * 60 * 31 * 6 * 1000;
				break;
			case "1Y":
				subtime = 365 * 24 * 60 * 60 * 1000;
				break;
			default:
				subtime = 60 * 60 * 1000;
				break;
		}
		const rangeto = Date.now();
		let rangefrom = rangeto - subtime;
		let found = "bitcoin";
		let foundelement = coinList.find(
			(element) => element.name === cryptoDropName
		);
		found = foundelement !== undefined ? foundelement.id : "bitcoin";
		// API Call for chart data
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/${found}/market_chart/range?vs_currency=${currency}&from=${Math.floor(
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
		setSearchList(json);
		setSearchListD(json);
		setBuyCoinList(json);
		setSellCoinList(json);
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
		let c_and_s = json.map((item, index) => {
			return `${item} ${currencySymbols[index]}`;
		});
		setCurrency_and_symbol(c_and_s)
		setCurrencyListD(c_and_s);
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
				sellValue,
				setSellValue,
				buyValue,
				setBuyValue,
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
				sellDropName,
				setSellDropName,
				buyDropName,
				setBuyDropName,
				sellCoinList,
				setSellCoinList,
				buyCoinList,
				setBuyCoinList,
				currencySymbol,
				setCurrencySymbol,
				currency_and_symbol,
				setCurrency_and_symbol,
				searchDropName,
				setSearchDropName,
				searchListD,
				setSearchListD,
				searchList,
				setSearchList,
			}}>
			{props.children}
		</CoinContext.Provider>
	);
};

export default CoinState;
