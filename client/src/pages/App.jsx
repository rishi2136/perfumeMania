
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from '../components/Navber/Navber'
import Footer from '../components/Footer/Footer'
import { getProduct } from '../actions/product.js'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState(null);
  
useEffect(()=>{
  getProduct("http://localhost:3012/api/product").then(res=>setProducts(res));
}, [products]);

  return (
  <>
  <Navber/>
  <Outlet context={products}/>
  <Footer/>
  </>
  )
}

export default App;