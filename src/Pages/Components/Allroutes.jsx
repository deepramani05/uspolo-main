import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewArrivals from './Extra/NewArrival'
import Collection from './Collection'
import Men from './Extra/Men'
import Women from './Extra/Women'
import Footwear from './Extra/Footwear'
import Innerwear from './Extra/Innerwear'
import Kids from './Extra/Kids'
import Sale from './Extra/Sale'
import Home from './Home'
import Watchlist from '../Logo/Watchlist'
import Cart from '../Logo/Cart'
import Toggle from '../Logo/Toggle'
import Poloshirts from './Extra/Poloshirts'
import Jeans from './Extra/Jeans'
import Shirts from './Extra/Shirts'
import Tshirts from './Extra/Tshirts'
import Single from './Single'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newarrivals' element={<NewArrivals/>} />
        <Route path='/collections' element={<Collection/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/footwear' element={<Footwear/>} />
        <Route path='/innerwear' element={<Innerwear/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/sale' element={<Sale/>} />
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginpage' element={<Toggle/>}/>
        <Route path='/polo-shirts' element={<Poloshirts/>}/>
        <Route path='jeans' element={<Jeans/>}/>
        <Route path='/shirts' element={<Shirts/>}/>
        <Route path='/t-shirts' element={<Tshirts/>}/>
        <Route path='/collections/:id' element={<Single/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes