import React, { useContext } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import CoinContext from "../../../../context/CoinContext";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
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
				pointRadius: 0,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: true,
		},
	};

	return <Line data={data} height={325} width={900} options={options} />;
};

export default LineChart;
