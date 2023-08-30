import { useSelector} from "react-redux";
import './style.css'
import { useState} from "react";

function About() {
    const state = useSelector((state) => state)
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value);
    }
    const data = state.todo.data?.filter(items => {
        return items.title.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <div className="listContainer">
            <div>
                <input name="search" value={value} onChange={(event) => handleChange(event)}/>
            </div>
            {data?.length ? data.map(item => <li key={item.id}>{item.title}</li>) : <h3>No data found..</h3>}
        </div>
    );
}
export default About;