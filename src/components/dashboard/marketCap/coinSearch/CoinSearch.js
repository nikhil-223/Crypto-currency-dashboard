import React, { useContext } from "react";
import "./CoinSearch.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import CoinContext from "../../../../context/CoinContext";

const CoinSearch = () => {
	const {
		setTheme,
		theme,
		searchList,
		setSearchListD,
		searchDropName,
		setSearchDropName,
		timePeriodList,
		timePeriodD,
	} = useContext(CoinContext);
	// modebtn
	const setmode = () => {
		setTheme(theme === "light" ? "dark" : "light");
		let time_period_items = Array.from(
			document.getElementsByClassName("chart__time-period__item")
		);
		timePeriodList.map((item, index) => {
			if (theme === "dark") {
				time_period_items[index].style.background =
					item.time === timePeriodD ? "rgba(205, 88, 136, 0.5)" : "#cee5e6";
			} else {
				time_period_items[index].style.background =
					item.time === timePeriodD ? "rgba(205, 88, 136, 1)" : "#174d79";
			}
			return 0;
		});


	};

	// search list

	const handleChange = (e) => {
		setSearchDropName(e.target.value);
		let rahul = searchList.filter((element) => {
			return element.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		!rahul[0] || e.target.value === ""
			? setSearchListD(searchList)
			: setSearchListD(rahul);
	};

	return (
		<>
			<div
				className={`coin-search bg-${
					theme === "light" ? "light" : "dark"
				} text-${theme === "light" ? "dark" : "light"}`}>
				<span className="coin-search__search-icon">
					<AiOutlineSearch />
				</span>
				<div className="coin-search__drop">
					<input
						className={`bg-${theme === "light" ? "light" : "dark"} text-${
							theme === "light" ? "dark" : "light"
						}`}
						htmlFor="search"
						type="text"
						placeholder="Search by Coin"
						onChange={handleChange}
						value={searchDropName}
					/>
				</div>
				<div
					className={`coin-search__modeBtn bg-${
						theme === "light" ? "light" : "dark"
					} text-modebtn-${theme === "light" ? "dark" : "light"}`}
					onClick={setmode}
					>
					{theme === "light" ? <MdDarkMode /> : <BsFillSunFill />}
				</div>
			</div>
		</>
	);
};

export default CoinSearch;
