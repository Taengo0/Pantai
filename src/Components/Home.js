import { useFetch } from "../fetchHook";
import Dropdown from "./Dropdown";
const Home = () => {
    const { data, loading } = useFetch('https://jsonplaceholder.org/users');
    console.log(data);
    return (<>{loading ? <h3>Pending..</h3> : data.map(item => (<div key={item.id}><Dropdown />{item.firstname} {item.lastname}</div>))}
    </>);
}
export default Home;