
import './App.css';
import Navbar from './navBar';
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import {Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
       <Navbar />
          <div className='nav_container'>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pricing" element={<Pricing/>} />
                <Route path="/about" element={<About/>} />
             </Routes>
          </div>
  
    </>
  
  
  )

 
}

export default App;
