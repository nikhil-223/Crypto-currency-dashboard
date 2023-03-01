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
	const { coinList, pieItemAdd, pieLabels, setPieLabels } =
		useContext(CoinContext);

	let labels = pieLabels;
	let list = [];

	labels.map((element) => {
		const p0 = coinList.find((item) => item.name === element);
		if (p0 !== undefined) {
			list.push(p0);
		}
		return 0
	});

	let dataset = list.map((element) => {
		return element.current_price;
	});

	let additem = coinList.filter((element) => {
		return element.name === pieItemAdd;
	});

	if (additem[0] !== undefined) {
		let i = dataset.findIndex((element) => {
			return additem[0].current_price === element;
		});

		if (i === -1) {
			dataset.splice(2, 1);
			labels.splice(2, 1);
			dataset.unshift(additem[0].current_price);
			labels.unshift(additem[0].name);
			setPieLabels(labels);
		}
	}
	const data = {
		labels: labels,
		datasets: [
			{
				// label: "# of Votes",
				data: dataset,
				backgroundColor: [
					"rgb(75 192 192 / 71%)",
					"rgb(255 99 132 / 50%)",
					"rgb(54 162 235 / 56%)",
				],
				borderWidth: 0,
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
