import CurrencyGraph from "./GraphCurrency";
import Contact from "./Contact";

const FormSection = () => {
  return (
    <form>
        <div className="formContainer">
            {/*<div>*/}
            {/*  <label>Name / Nama</label>*/}
            {/*  <input type="text" />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <label>No. of pax / Berapa orang datang</label>*/}
            {/*  <input type="number" />*/}
            {/*</div>*/}
            {/*<div><CurrencyGraph/></div>*/}
            <div><input type="date"/></div>
            <div><input type="datetime-local"/></div>
        </div>
    </form>
  );
};

const Home = () => {
  return <Contact />;
};
export default Home;
