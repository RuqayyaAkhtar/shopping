import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navv from './components/Nav';
import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login'
import Cart from './components/Cart';
import Search from './components/Search';

function App() {
  const [component,setSignup]=useState()
  const [show,setcomponent]=useState(true)
  const [alert,setcomponents]=useState(true)
  const [cartt,setCartComp]=useState(true)
  const [srch,setSrch]=useState(true)

  const showSignup=()=>{
   setSignup('signup')
  }
  const showLogin=()=>{
    setSignup('login')
  }
  const showCart=()=>{
    setSignup('cart')
  }
  const showSearch=()=>{
    setSignup('search')
  }

  const closeSignup=()=>{
    setcomponent(false)
  }
  const closeLogin=()=>{
    setcomponents(false)
  }
  const closeCart=()=>{
    setCartComp(false)
  }
  const closesearch=()=>{
    setSrch(false)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navv signup={showSignup} showCart={showCart} showSearch={showSearch} />
      {show && component ==='signup' && <Signup closeSignup={closeSignup} showlog={showLogin} />}
      {alert && component ==='login' && <Login closeSignup={closeLogin} showSignup={showSignup}/>}
      {cartt && component==='cart' && <Cart closeSignup={closeCart} />}
      {srch && component==='search' && <Search closeSignup={closesearch} />}
      <Routes>
      <Route path='/' element={ <Home/>}/>
      {/* <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>       */}
      </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
