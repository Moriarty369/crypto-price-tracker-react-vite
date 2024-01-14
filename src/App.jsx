import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'

// import ParticlesBg from './components/ParticlesBg'

function App() {


  return (
    
    <BrowserRouter>
    <Navbar />
    {/* <ParticlesBg /> */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/coin/:id' element={<Detail />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
