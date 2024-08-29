import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/aboutUS' element= {<AboutUs/>}></Route>
    </Routes>
    </>
  )
}

export default App
