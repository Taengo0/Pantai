import { useFetch } from "../fetchHook";
import Dropdown from "./Dropdown";
import {useEffect, useState} from "react";
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {DatePickerWithRange} from "./DateRangePicker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const Home = () => {
    const users= useFetch('https://jsonplaceholder.org/users');
    const { data, loading } = useFetch('https://api.frankfurter.app/2010-01-01..2010-01-31');
    const [graphData, setGraphData] = useState({});
    const [graphOptions] = useState({
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
    const [selectedValue, setSelectedValue] = useState('MYR')

    const { rates } = data;
    const arr = [];
    const labels = Object.keys(rates || {});
    const grphData = Object.values(rates || {});
    grphData.forEach((value) => {
        arr.push(value[selectedValue])
    });
    useEffect(() => {
        setGraphData({
            labels: labels,
            datasets: [
                {
                    interaction: {
                        intersect: false,
                    },
                    fill: true,
                    label: 'Dataset 1',
                    data: arr,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    tension: 0.4
                }
            ],
        });
    }, [selectedValue]);
    const dropdownHandler = (e) => {
        setSelectedValue(e.target.value)
    }

    return (
        <>
            {users.loading ? <h3>Pending..</h3> :
                <div>
                    <Dropdown data={Object.keys(grphData[0])} selectedValue={selectedValue}  dropdownHandler={dropdownHandler}/>
                    {/*<DatePickerWithRange />*/}
                    {loading ? <h3>Loading graph data..</h3> : <Line options={graphOptions} data={graphData} />}
                </div>
            }
        </>);
}
export default Home;