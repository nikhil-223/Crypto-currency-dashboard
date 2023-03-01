import React, { useContext } from "react";
import CoinContext from "../../../../context/CoinContext";
import "./TimePeriodItem.scss";

const TimePeriodItem = (props) => {
	const { setChartRange, theme,timePeriodD,setTimePeriodD } = useContext(CoinContext);
	const { time } = props;

	const handleclick = (e) => {
		e.preventDefault();
		setChartRange(e.target.innerHTML);
		setTimePeriodD(e.target.innerHTML)
		let time_period_elements = Array.from(
			document.getElementsByClassName("chart__time-period__item")
		);
		time_period_elements.map((item) => {
			item.style.background = theme === "dark" ? "#174d79" : "#cee5e6";
			return 0;
		});
		e.target.style.backgroundColor =
			theme === "dark" ? "rgba(205, 88, 136,1)" : "rgba(205, 88, 136, 0.5)";
	};
	

	return (
		<div
			className={`chart__time-period__item text-${
				theme === "light" ? "dark" : "light"
			} bg-timePeriod-${theme === "light" ? "light" : "dark"}`}
			onClick={handleclick}
			style={
				time === timePeriodD
					? {
							backgroundColor:
								theme === "dark"
									? "rgba(205, 88, 136,1)"
									: "rgba(205, 88, 136, 0.5)",
					  }
					: {}
			}>
			{time}
		</div>
	);
};

export default TimePeriodItem;
