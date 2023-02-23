import React from "react";
import "./CoinSearch.scss";
import { AiOutlineSearch } from "react-icons/ai";

const CoinSearch = () => {
	return (
		<>
			<div className="coin-search">
				<span className="coin-search__search-icon">
					<AiOutlineSearch />
				</span>
				<input
					className="coin-search__input"
					type="text"
					placeholder="Search by Coin"
				/>
			</div>
		</>
	);
};

export default CoinSearch;
