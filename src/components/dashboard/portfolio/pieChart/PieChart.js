import React, { useContext } from "react";
import "./PieChart.scss";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CoinContext from "../../../../context/CoinContext";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PieChart = () => {
	const { coinList, pieItemAdd, setPieItemAdd } = useContext(CoinContext);

	let list = coinList.filter((element) => {
		return (
			element.name === "Bitcoin" ||
			element.name === "Ethereum" ||
			element.name === "Tether"
		);
	});

	const dataset = list.map((element) => {
		return element.current_price;
	});

	const labels = list.map((element) => {
		return element.name;
	});

	let additem = coinList.filter((element) => {
		return element.name === pieItemAdd;
	});
	
	if (additem[0] !== undefined) {

		let i = dataset.findIndex((element) => {
			return additem[0].current_price === element;
		});

		if(i===(-1)){
			console.log(dataset);
		dataset.splice(2,1);
		labels.splice(2,1);
		console.log(dataset);
		dataset.unshift(additem[0].current_price);
		labels.unshift(additem[0].name);}
	}
	// console.log(dataset);
	const data = {
		labels: labels,
		datasets: [
			{
				// label: "# of Votes",
				data: dataset,
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
		plugins: {
			legend: {
				display: true,
				position: "right",
				borderWidth: 2,
			},
		},
	};
	return <Doughnut data={data} options={options} height={300} width={1000} />;
};

export default PieChart;
