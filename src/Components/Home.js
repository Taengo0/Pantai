const FormSection = () => {
  return (
    <form>
      <div className="formContainer">
        <div>
          <label>Name / Nama</label>
          <input type="text" />
        </div>
        <div>
          <label>No. of pax / Berapa orang datang</label>
          <input type="number" />
        </div>
      </div>
    </form>
  );
};

const Home = () => {
  return <FormSection />;
};
export default Home;
