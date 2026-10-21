import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import OurCoffeePage from './Pages/OurCoffeePage/OurCoffeePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ourCoffee' element={<OurCoffeePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
