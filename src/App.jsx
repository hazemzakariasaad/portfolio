
import './App.css'
import Hero from './sections/Hero/Hero'
import Home from './components/home/Home'
import Navbar from'./components/Navbar'
import { BrowserRouter as Router,Route,Routes} 
from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
