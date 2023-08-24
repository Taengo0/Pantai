import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./Redux/Slice/todo";
import './App.css';
import About from "./Components/About";
import {useEffect} from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);
    useEffect(() => {
        dispatch(fetchTodos());
        // dispatch();
    }, [dispatch]);
    return (
    <div className="App">
      <NavBar/>
      <div className='container'>
        {state.isLoading ? <h2>Loading</h2> : (
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
