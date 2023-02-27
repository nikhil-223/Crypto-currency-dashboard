import React,{useContext} from "react";
import CoinContext from "../../../../context/CoinContext";
import "./TimePeriodItem.scss";

const TimePeriodItem = (props) => {
    const {setChartRange,theme} = useContext(CoinContext)
	const { time } = props; 
    const handleclick=(e)=>{
		e.preventDefault();
		setChartRange(e.target.innerHTML);
    }
    // useEffect(() => {
	// 	console.log(chartRange);
	// }, [])
	
	return (
		<div
			className={`chart__time-period__item text-${
				theme === "light" ? "dark" : "light"
			} bg-timePeriod-${theme === "light" ? "light" : "dark"}`}
			onClick={handleclick}>
			{time}
		</div>
	);
};

export default TimePeriodItem;
