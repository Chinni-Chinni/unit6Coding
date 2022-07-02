import Navbar from './Components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Booking from './Components/Booking';
import { Home } from './Components/Home';
import { useSelector } from 'react-redux';

function App() {
  const login = useSelector(state =>state.users)
  return (
    <div className="App">
    < Navbar />
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      {/* <Route path = "/booking" element= {<Booking/>}></Route> */}
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/movies/:id' element = {<Booking />}></Route>
      





    </Routes>
    </div>
  );
}

export default App;
