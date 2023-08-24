import { useFetch } from "../fetchHook";
import Dropdown from "./Dropdown";
import {useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Home = () => {
    const users= useFetch('https://jsonplaceholder.org/users');
    const { data, loading } = useFetch('https://api.frankfurter.app/2010-01-01..2010-01-31');

    const [graphData, setGraphData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 43, 21, 34, 76, 76, 32],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [43, 54, 21, 34, 76, 54, 32],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });
    const [graphOptions, setGraphOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    });
    console.log(data);

    return (
        <>
            {users.loading ? <h3>Pending..</h3> :
                <div>
                    <Dropdown data={users.data} />
                    {loading ? <h3>Loading graph data..</h3> : <Line options={graphOptions} data={graphData} />}
                </div>
            }
        </>);
}
export default Home;