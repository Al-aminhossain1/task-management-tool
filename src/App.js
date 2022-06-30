import './App.css';
import Navbar from './Components/Navbar';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/Home';
import Complete from './Components/Complete';
import Calender from './Components/Calender';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/complete' element={<Complete></Complete>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
