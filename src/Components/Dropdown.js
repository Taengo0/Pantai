import {useState} from "react";

const Dropdown = ({ data }) => {
    const [selectedValue, setSelectedValue] = useState('Laura')
    const dropdownHandler = (e) => {
        setSelectedValue(e.target.value)
    }

    const layout = data.map(item => (<option key={item.id} value={item.firstname}>{item.firstname} {item.lastname}</option>));

  return (
      <>
        <label>Choose a name</label>
        <select defaultValue={selectedValue} name="cars" id="cars" onChange={(e) => dropdownHandler(e)}>
            {layout}
        </select>
          <div>{selectedValue}</div>
      </>
  )
}

export default Dropdown;