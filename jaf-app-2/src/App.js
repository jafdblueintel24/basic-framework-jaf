
import './App.css';
import Navbar from './navBar';
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import About from "./pages/About"

function App() {
 let component
  switch (window.location.pathname){
    
    case "/":
      component = <Home/>
      break
    case "/pricing":
      component = <Pricing/>
      break
    case "/about":
      component = <About/>
      break
  }

  return (
  <>
  <Navbar />
  <div className='nav_container'>
  {component}
  </div>
  
  </>
  
  
  )

 
}

export default App;
