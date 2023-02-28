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
	LineController,
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
	Legend,
	LineController,
);

const LineChart = () => {
	const { chartData, chartRange } = useContext(CoinContext);

	// lables

	let labels = [];
	chartData.prices.map((element) => {
		const timestamp = new Date(element[0]);
		const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
		const yearMonth = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		let day = weekday[timestamp.getMonth()];
		let month = yearMonth[timestamp.getMonth()];
		switch (chartRange) {
			case "1H":
				labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
				break;
			case "1D":
				labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
				break;
			case "1W":
				labels.push(`${day} ${timestamp.getHours()}:${timestamp.getMinutes()}`);
				break;
			case "1M":
				labels.push(`${month} ${timestamp.getDate()}`);
				break;
			case "6M":
				labels.push(`${month} ${timestamp.getMonth()}`);
				break;
			case "1Y":
				labels.push(`${month} ${timestamp.getMonth()}`);
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

	const skipped = (ctx, value) =>
		ctx.p0.skip || ctx.p1.skip ? value : undefined;
	const up = (ctx, value) =>
		ctx.p0.parsed.y < ctx.p0.parsed.y ? value : undefined;
	const down = (ctx, value) =>
		ctx.p0.parsed.y > ctx.p0.parsed.y ? value : undefined;

	const data = {
		labels,
		datasets: [
			{
				label: "Price",
				data: dataArray,
				borderColor: "rgb(255, 99, 132)",
				tension: 0.1,
				pointRadius: 0,
				fill: true,
				interaction: {
					intersect: false,
				},
				radius: 0,
				spanGaps: true,
				segment: {
					borderColor: (ctx) =>
						up(ctx, "rgb(255, 99, 132)") || down(ctx, "rgb(0, 0, 0)"),
					borderColor: (ctx) =>
						skipped(ctx, "rgb(0,0,0,0.2)") || down(ctx, "rgb(192,75,75)"),
					borderDash: (ctx) => skipped(ctx, [6, 6]),
				},
			},
		],
	};

	const x = window.matchMedia("(max-width: 500px)");
	let height;
	let width;
	let yticks;
	let xticks;

	if (x.matches) {
		// If media query matches
		height = 500;
		width = 900;
		yticks = { display: false, beginAtZero: true };
		xticks = { display: false, beginAtZero: true };
	} else {
		height = 250;
		width = 900;
		yticks={};
		xticks={};
	}
	const options = {
		responsive: true,
		plugins: {
			legend: false,
		},
		scales: {
			// to remove the labels
			x: {
				ticks: xticks,

				// to remove the x-axis grid
				grid: {
					drawBorder: false,
					display: false,
				},
			},
			// to remove the y-axis labels
			y: {
				ticks: yticks,
				// to remove the y-axis grid
				grid: {
					drawBorder: false,
					display: false,
				},
			},
		},
	};

	

	// Call listener function at run time
	// Attach listener function on state changes

	return <Line data={data} height={height} width={width} options={options} />;
};

export default LineChart;
