import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {Route, Routes, useNavigate} from "react-router-dom";
import Weathertab from './components/Weathertab';
import NotFound from "./components/NotFound";
import { useState, useEffect } from 'react';

function App() {

  const [cityInput, setCityInput] = useState([])
  const navigate = useNavigate()
  
  function handleChange(event){
      setCityInput(prevCity => {
        return {
          ...prevCity,
          [event.target.name]: event.target.value
        }
      })
      localStorage.setItem('value', event.target.value)  
  }
  function handleSubmit(event){
    event.preventDefault()
    navigate('/')
  }

  return (
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/search" element={<Searchbar onChange={handleChange} onSubmit={handleSubmit}/>} />
          <Route path="/" element={<Weathertab city={localStorage.getItem('value')}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  );
}

export default App;
