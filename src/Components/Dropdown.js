const Dropdown = ({ data, selectedValue, dropdownHandler }) => {
    const layout = data.map(item => (<option key={item}>{item}</option>));

  return (
      <>
        <div className="pd20">Choose currency</div>
        <select defaultValue={selectedValue} name="cars" id="cars" onChange={(e) => dropdownHandler(e)}>
            {layout}
        </select>
      </>
  )
}

export default Dropdown;