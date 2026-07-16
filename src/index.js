import React from "react";
import ReactDOM from "react-dom/client";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
// import "./styles.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
	const data = {
		labels: ["first", "second", "third", "4th", "5th"],
		datasets: [
			{
				label: "First set",
				data: [1, 2, 4, 8, 20],
				backgroundColor: "blue",
			},
		],
	};

	const options = {
		responsive: false,
		scales: {
			x: {
				grid: {
					display: true,
					drawBorder: false,
					borderDash: [3, 3],
					color: "blue",
				},
				categoryPercentage: 0.7,
				barPercentage: 0.9,
				beginAtZero: true,
			},
			y: {
				display: false,
				grid: {
					display: false,
					color: "transparent",
				},
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="App">
			<h1>React Charts</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Bar width={200} height={200} data={data} options={options} />
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

export default App;