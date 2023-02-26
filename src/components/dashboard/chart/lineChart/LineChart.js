import React,{useEffect,useContext} from "react";
import { Chart } from "chart.js/auto";
import './LineChart.scss'

import CoinContext from "../../../../context/CoinContext";


const LineChart = () => {
    const {chartData, setchartData} = useContext(CoinContext)
	// setup
	let labels = [];
	chartData.prices.map((element) => {
		const timestamp = new Date(element[0]);
		labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
	});
	let dataArray=[];

	chartData.prices.map((element) => {
		const price = element[1];
		dataArray.push(price);
	});

	
	const data = {
		labels: labels,
		datasets: [
			{
				label: "",
				data: dataArray,
				fill: true,
				borderColor: "rgb(0, 192, 192)",
				borderWidth: 1,
				pointBackgroundColor: "rgba(255, 0, 0, 0.6)",
				pointRadius:0.1,
			}
		],
	};

	// config
	const config = {
		type: "line",
		data: data,
	};

	// render init block
    useEffect(() => {  
      const myChart = new Chart(document.getElementById("myChart"), config);
	  

    }, []) 
    
	
	return (
		<>
					<canvas style={{aspectRatio: "auto 1800 / 300"}} id="myChart"></canvas>
		</>
	);
};

export default LineChart;
