
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EachMoveiPage from './components/EachMoveiPage'

function App() {
  return (
     <div > 
         <Router>
            <Navbar/>

              <Routes>
                  <Route path='/' element={<Home/>} /> 
                  <Route path='/movie/:id' element={<EachMoveiPage/>} />
              </Routes>  

             <Footer/>
         </Router>
     </div>
  )
}

export default App

