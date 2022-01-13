import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Cart from './Pages/Cart/Cart'
import ProductDetail from './Pages/Product/ProductDetail'
import Home from './Pages/Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContext from './Context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </Switch>
      </CartContext>
    </BrowserRouter>


  )
}

export default App
