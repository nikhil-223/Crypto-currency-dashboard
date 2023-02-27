import React,{useContext} from "react";
import "./CoinSearch.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import CoinContext from "../../../context/CoinContext";

const CoinSearch = () => {
	const {setTheme,theme} = useContext(CoinContext)
	const setmode=()=>{
		setTheme(theme === "light"? "dark":"light")
		
	}
	return (
		<>
			<div
				className={`coin-search bg-${
					theme === "light" ? "light" : "dark"
				} text-${theme === "light" ? "dark" : "light"}`}>
				<span className="coin-search__search-icon">
					<AiOutlineSearch />
				</span>
				<input
					className={`coin-search__input bg-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}
					type="text"
					placeholder="Search by Coin"
				/>
				<div
					className={`coin-search__modeBtn bg-${
						theme === "light" ? "light" : "dark"
					} text-${theme === "light" ? "dark" : "light"}`}
					onClick={setmode}>
					{theme === "light" ? (
						<MdDarkMode />
					) : (
						<BsFillSunFill />
					)}
				</div>
			</div>
		</>
	);
};

export default CoinSearch;
