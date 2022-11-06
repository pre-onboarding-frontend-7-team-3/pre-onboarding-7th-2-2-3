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
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

function GraphChart() {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: "#0078d7",
        backgroundColor: "#4898da",
      },
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: "#16c60c",
        backgroundColor: "#6aea63",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default GraphChart;
