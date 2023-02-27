import React from "react";
import "./PieChart.scss";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PieChart = () => {
	const data = {
		labels: ["Tether", "Luna", "Ethereum"],
		datasets: [
			{
				// label: "# of Votes",
				data: [12, 19, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		plugins:{
			legend:{
				display:true,
				position:'right',
				borderWidth:2
			}
		}
	}
	return <PolarArea data={data} options={options}  height={300} width={1000} />;
};

export default PieChart;
