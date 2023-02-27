import React, { useContext } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import CoinContext from "../../../../context/CoinContext";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Title,
	Tooltip,
	Legend
);

const LineChart = () => {
	const { chartData ,chartRange} = useContext(CoinContext);


	// lables 
	
	let labels = [];
	chartData.prices.map((element) => {
		const timestamp = new Date(element[0]);
		switch (chartRange) {
			case "1D":
				labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
				break;
			case "1W":
				labels.push(`${timestamp.getDay()}}`);
				break;
			case "1M":
				console.log(timestamp.getDate());
				labels.push(`${timestamp.getDate()}`);
				break;
			case "6M":
				labels.push(`${timestamp.getMonth()}`);
				break;
			case "1Y":
				labels.push(`${timestamp.getMonth()}`);
				break;
			default:
				labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
				break;
		}
		// eslint-disable-next-line
		return;
	});

	let dataArray = [];
	chartData.prices.map((element) => {
		dataArray.push(element[1]);
		// eslint-disable-next-line
		return;
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Price",
				data: dataArray,
				borderColor: "rgb(255, 99, 132)",
				tension:0.1,
				pointRadius: 0,
				fill:true,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend:true,
			
		},
	};

	return <Line data={data} height={300} width={900} options={options} />;
};

export default LineChart;
