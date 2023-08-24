import { useFetch } from "../fetchHook";
import Chart from 'chart.js/auto';
import Dropdown from "./Dropdown";

const Home = () => {
    const users= useFetch('https://jsonplaceholder.org/users');
    const { data, loading } = useFetch('https://api.frankfurter.app/2010-01-01..2010-01-31');
    console.log(data);

    // graph part
    new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return (<>{users.loading ? <h3>Pending..</h3> :
        <div>
            <Dropdown data={users.data} />
            <div><canvas id="myChart"></canvas></div>
        </div>
    }
    </>);
}
export default Home;