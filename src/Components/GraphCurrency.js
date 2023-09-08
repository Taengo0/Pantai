import { useFetch } from "../fetchHook";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
// import {DatePickerWithRange} from "./DateRangePicker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const CurrencyGraph = () => {
  const users = useFetch("https://jsonplaceholder.org/users");
  const [selectedValue, setSelectedValue] = useState("MYR");
  const [graphData, setGraphData] = useState({});
  const [graphOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  });
  const [detailsValue, setDetailsValue] = useState({
    dateFrom: "2023-07-01",
    dateTo: new Date().toISOString().substring(0, 10),
  });
  const { data, loading } = useFetch(
    `https://api.frankfurter.app/${detailsValue.dateFrom}..${detailsValue.dateTo}`,
  );

  const { rates } = data;
  const arr = [];
  const labels = Object.keys(rates || {});
  const grphData = Object.values(rates || {});
  grphData.forEach((value) => {
    arr.push(value[selectedValue]);
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
          label: "Currency",
          data: arr,
          borderColor: "rgb(210, 145, 188)",
          backgroundColor: "rgb(224, 187, 228)",
          tension: 0.4,
        },
      ],
    });
    // eslint-disable-next-line
  }, [selectedValue, rates]);
  const dropdownHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  const detailsHandler = (e) => {
    setDetailsValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {users.loading ? (
        <h3>Pending..</h3>
      ) : (
        <div>
          <Dropdown
            data={Object.keys(grphData[0])}
            selectedValue={selectedValue}
            dropdownHandler={dropdownHandler}
          />
          {/*<DatePickerWithRange />*/}
          <div>
            <input
              type={"date"}
              onChange={detailsHandler}
              value={detailsValue.dateFrom}
              name="dateFrom"
            />{" "}
            to{" "}
            <input
              type="date"
              onChange={detailsHandler}
              value={detailsValue.dateTo}
              name="dateTo"
            />
          </div>
          {loading ? (
            <h3>Loading graph data..</h3>
          ) : (
            <div>
              <Line options={graphOptions} data={graphData} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default CurrencyGraph;
