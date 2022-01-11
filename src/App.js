import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Cart from './Components/Cart/Cart'
import ProductDetail from './Components/Product/ProductDetail'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>


  )
}

export default App
