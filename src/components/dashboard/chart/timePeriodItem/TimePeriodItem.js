import React,{useContext} from "react";
import CoinContext from "../../../../context/CoinContext";
import "./TimePeriodItem.scss";

const TimePeriodItem = (props) => {
    const {setTimePeriod,theme} = useContext(CoinContext)
	const { time } = props; 
    const handleclick=(e)=>{
        setTimePeriod(e.target.innerHTML)
    }

	return (
		<div
			className={`chart__menu__time-period__item text-${
				theme === "light" ? "dark" : "light"
			} bg-timePeriod-${theme === "light" ? "light" : "dark"}`}
			onClick={handleclick}>
			{time}
		</div>
	);
};

export default TimePeriodItem;
