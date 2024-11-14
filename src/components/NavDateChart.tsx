import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);
import { Line } from "react-chartjs-2";

interface ChartDataItem {
  date: string;
  nav: string;
}

interface ChartData {
  chartData: ChartDataItem[];
}

const NavDateChart = ({ chartData }: ChartData) => {
  const dates = chartData
    .slice(-20)
    .map((item) => item.date)
    .reverse();
  const navs = chartData.slice(-20).map((item) => item.nav);

  const data = {
    labels: dates,
    datasets: [
      {
        data: navs,
        borderColor: "#f59e0b",
        backgroundColor: "rgba(252, 211, 77, 0.25)",
        fill: true,
        tension: 0.3,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: false,
        grid: { color: "#1e293b" },
      },
      x: {
        grid: { color: "#1e293b" },
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default NavDateChart;
