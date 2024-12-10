import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

// const testData = [];
// export const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

export const testChart = ({ data, options }) => {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
  return <Scatter data={data} options={options}/>;
};



// <Scatter
//   data={...}
// />
