import React, { useState } from "react";
import CoinContext from "./CoinContext";

import { AiFillHome } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { RiPieChart2Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

const CoinState = (props) => {
	const [coinList, setCoinList] = useState([]);
	const [coinListD, setCoinListD] = useState(coinList);
	const [searchList, setSearchList] = useState(coinList)
	const [searchListD, setSearchListD] = useState(searchList)
	const [sellCoinList, setSellCoinList] = useState(coinList);
	const [buyCoinList, setBuyCoinList] = useState(coinList);
	
	const [chartTypeList, setChartTypeList] = useState([
		{ chartType: "Line Chart", path: "/lineChart" },
		{ chartType: "Bar Chart", path: "/barChart" },
		{ chartType: "CandleStick", path: "/CandleStick" },
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
	const [timePeriodD, setTimePeriodD] = useState("1H");
	const [phoneMenuItemActive, setPhoneMenuItemActive] = useState("Markets")
	const [phoneMenuItems, setPhoneMenuItems] = useState([
		{ itemName: "Home", icon: <AiFillHome /> },
		{ itemName: "Markets", icon: <BsFillBarChartFill /> },
		{ itemName: "Exchange", icon: <FaCoins /> },
		{ itemName: "Portfolio", icon: <RiPieChart2Fill /> },
	]);
	const [timePeriodList, setTimePeriodList] = useState([
		{ time: "1H" },
		{ time: "1D" },
		{ time: "1W" },
		{ time: "1M" },
		{ time: "6M" },
		{ time: "1Y" },
	]);
	
	const [currencyDropName, setCurrencyDropName] = useState("INR ₹");
	const [currencyName, setCurrencyName] = useState("INR ₹");
	const [cryptoDropName, setCryptoDropName] = useState("Bitcoin");
	const [coinName, setCoinName] = useState("Bitcoin");
	const [chartDropName, setChartDropName] = useState("Line Chart");
	const [chartName, setChartName] = useState("Line Chart");
	const [searchDropName, setSearchDropName] = useState("");
	const [sellDropName, setSellDropName] = useState("Bitcoin");
	const [buyDropName, setBuyDropName] = useState("Ethereum");
	const [currency, setCurrency] = useState("inr");
	const [sellValue, setSellValue] = useState("");
	const [currencySymbol, setCurrencySymbol] = useState("₹");
	const [currency_and_symbol, setCurrency_and_symbol] = useState([])
	const [buyValue, setBuyValue] = useState("0");
	const [pieLabels, setPieLabels] = useState([
		"Bitcoin",
		"Ethereum",
		"Lido Staked Ether",
	]);
	const [pieItemAdd, setPieItemAdd] = useState("")

	const [theme, setTheme] = useState("dark");
	const [chartData, setChartData] = useState({ prices: [] });
	const [chartRange, setChartRange] = useState("");
	const [alert, setAlert] = useState({
		type:"warning",
		message:""
	})

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
			
		try {
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
			
		} catch (error) {
			console.log(error.message,'chart data');
			setAlert({type:'warning',message:'API request limit exceeded... Try again later'})
		}

		
	};

	const getCoins = async () => {
		// 	// API Call for coins
		try {
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
		} catch (error) {
			console.log(error.message)
			setAlert({type:'warning',message:'Failed to fetch coins'})
		}
		
		
		
	};

	const getCurrencies = async () => {
		
		try {
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
			
		} catch (error) {
			console.log(error.message);
			setAlert({type:'warning',message:'Failed to fetch currency'})
		}
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
				timePeriodD,
				setTimePeriodD,
				pieItemAdd,
				setPieItemAdd,
				pieLabels,
				setPieLabels,
				coinName,
				setCoinName,
				currencyName,
				setCurrencyName,
				alert,
				setAlert,
				chartName,
				setChartName,
				phoneMenuItemActive,
				setPhoneMenuItemActive,
				phoneMenuItems,
				setPhoneMenuItems,
			}}>
			{props.children}
		</CoinContext.Provider>
	);
};

export default CoinState;
