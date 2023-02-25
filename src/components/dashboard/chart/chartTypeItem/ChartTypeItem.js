import React, { useContext } from "react";
import CoinContext from "../../../../context/CoinContext";
import "./ChartTypeItem.scss";

const ChartTypeItem = (props) => {
  const { setChartDropName,theme } = useContext(CoinContext);
  const { graph } = props;
  const handleClick =(e)=>{

    setChartDropName(e.target.innerHTML);
  }
	return (
		<div
			className={`chartTypeItem bg-droplist-${
				theme === "light" ? "light" : "dark"
			} text-${theme === "light" ? "dark" : "light"}`}
			onClick={handleClick}>
			{graph}
		</div>
	);
};

export default ChartTypeItem;
