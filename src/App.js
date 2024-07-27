import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '/components/Header';
import Home from '/pages/Home';
import ProductDetails from '/pages/ProductDetails';
import CartPage from '/pages/CartPage';
import CheckoutPage from '/pages/CheckoutPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:id" render={(props) => <ProductDetails {...props} addToCart={addToCart} />} />
        <Route path="/cart" render={() => <CartPage cartItems={cartItems} onRemoveFromCart={removeFromCart} />} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default App;
