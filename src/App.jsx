
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Discount from './Components/Discount'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Latest from './Components/Latest'
import Example from './Components/Mobilehero'
import Nav from './Components/Nav'
import Services from './Components/Services'
import LogoCarousel from './Components/Carousel'
import Products from './Components/Products'
import Newsletter from './Components/Newsletter'
import Collection from './Components/Collection'


function App() {

  return (
    <>

    <Nav/>
    <Routes>
      <Route path='/' element={<>
        <Hero/>
    <About/>
    <LogoCarousel/>
    <Latest/>
    <Services/>
      </>}/>
      <Route path='/about' element={<>
        <About/>
      </>}/>
      <Route path='/products' element={<>
      <Products/>
        </>}/>
      <Route path='/products/:productId' element={<Products/>}/>
      <Route path='/col' element={<Collection/>}/>

    </Routes>
    {/* <Discount/> */}
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
