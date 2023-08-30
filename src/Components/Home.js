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
// import {DatePickerWithRange} from "./DateRangePicker";

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
    const [selectedValue, setSelectedValue] = useState('MYR')
    const [graphData, setGraphData] = useState({});
    const [graphOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    });

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
                    label: 'Currency',
                    data: arr,
                    borderColor: 'rgb(210, 145, 188)',
                    backgroundColor: 'rgb(224, 187, 228)',
                    tension: 0.4
                }
            ],
        });
    }, [selectedValue, rates]);
    const dropdownHandler = (e) => {
        setSelectedValue(e.target.value)
    }

    return (
        <>
            {users.loading ? <h3>Pending..</h3> :
                <div>
                    <Dropdown data={Object.keys(grphData[0])} selectedValue={selectedValue}  dropdownHandler={dropdownHandler}/>
                    {/*<DatePickerWithRange />*/}
                    {loading ? <h3>Loading graph data..</h3> : <div><Line options={graphOptions} data={graphData} /></div>}
                </div>
            }
        </>);
}
export default Home;