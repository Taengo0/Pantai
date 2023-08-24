import { useFetch } from "../fetchHook";
import Dropdown from "./Dropdown";
const Home = () => {
    const { data, loading } = useFetch('https://jsonplaceholder.org/users');
    return (<>{loading ? <h3>Pending..</h3> :
        <Dropdown data={data} />}
    </>);
}
export default Home;