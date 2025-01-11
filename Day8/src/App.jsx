import { Route, Routers } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
     <Routers>
     <Navbar/>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routers>
    </>
  )
}

export default App
