import React,{useState} from "react";
import CoinContext from "./CoinContext";
import { BsFillCalendarWeekFill } from "react-icons/bs";

const CoinState = (props) => {

	


	const [coinList, setCoinList] = useState([]);
	const [currencyList, setCurrencyList] = useState([
		"btc",
		"eth",
		"ltc",
		"bch",
		"bnb",
		"eos",
		"xrp",
		"xlm",
		"link",
		"dot",
		"yfi",
		"usd",
		"aed",
		"ars",
		"aud",
		"bdt",
		"bhd",
		"bmd",
		"brl",
		"cad",
		"chf",
		"clp",
		"cny",
		"czk",
		"dkk",
		"eur",
		"gbp",
		"hkd",
		"huf",
		"idr",
		"ils",
		"inr",
		"jpy",
		"krw",
		"kwd",
		"lkr",
		"mmk",
		"mxn",
		"myr",
		"ngn",
		"nok",
		"nzd",
		"php",
		"pkr",
		"pln",
		"rub",
		"sar",
		"sek",
		"sgd",
		"thb",
		"try",
		"twd",
		"uah",
		"vef",
		"vnd",
		"zar",
		"xdr",
		"xag",
		"xau",
		"bits",
		"sats",
	]);
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
	const [graphList, setGraphList] = useState([
		{ graph: "chat" },
		{ graph: "pat" },
		{ graph: "lat" },
		{ graph: "rat" },
	]);
	const [timePeriod, setTimePeriod] = useState("1d")
	const [timePeriodList, setTimePeriodList] = useState([
		{ time: "1D" },
		{ time: "1W" },
		{ time: "1M" },
		{ time: "6M" },
		{ time: "1Y" },
		{ time: <BsFillCalendarWeekFill /> },
	]);

	const [cryptoDropName, setCryptoDropName] = useState('Crypto currency');
	const [chartDropName, setChartDropName] = useState('Chart Type');
	const [currencyDropName, setCurrencyDropName] = useState('INR ₹');

	const [theme, setTheme] = useState("dark")


    const getCoins = async () => { 
			// API Call 

			// const response = await fetch(
			// 	`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyDropName.split(" ")[0].toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
			// 	{
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 		},
			// 	}
			// );
			// const json = await response.json();
			// setCoinList(json)

			// console.log(json); 
			
		};

    const getCurrencies = async () => {
			// API Call

			// const response = await fetch(
			// 	`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`,
			// 	{
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json", 
			// 		},
			// 	}
			// );
			// const json = await response.json();
			// setCurrencyList(json)


			// console.log(json);
		};
		

  return (
		<CoinContext.Provider
			value={{
				coinList,
				getCoins,
				getCurrencies,
				cryptoDropName,
				setCryptoDropName,
				currencyList,
				setCurrencyList,
				currencySymbols,
				graphList,
				chartDropName,
				setChartDropName,
				currencyDropName,
				setCurrencyDropName,
				timePeriodList,
				setTimePeriodList,
				timePeriod,
				setTimePeriod,
				theme,
				setTheme,
				currencyListD,
				setCurrencyListD,
			}}>
			{props.children}
		</CoinContext.Provider>
	);
}

export default CoinState;