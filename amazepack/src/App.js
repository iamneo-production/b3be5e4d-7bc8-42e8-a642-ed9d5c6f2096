import './App.css';
import { useEffect, useLayoutEffect } from 'react';
import axios from "axios"
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { 
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
  Navbar, 
  Toast,
  Home,
  Shop, 
  ProductPage,
<<<<<<< HEAD
  Login,
=======
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
  Signup,
  Wishlist,
  Cart,
  Orders,
  useUserLogin,
  useWishlist,
  useCart
} from "./index"

function App() {
<<<<<<< HEAD

=======
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
  const { userLoggedIn } = useUserLogin()
  const { dispatchUserWishlist } = useWishlist()
  const { dispatchUserCart } = useCart()

<<<<<<< HEAD

=======
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
<<<<<<< HEAD
          <Route path="/"         exact element={<Home/>} />
=======
        <Route path="/"         exact element={<Login/>} />
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
          <Route path="/shop"     exact element={<Shop/>} />
          <Route path="/shop/:id"       element={<ProductPage/>} />
          <Route path="/login"          element={<Login/>} />
          <Route path="/signup"         element={<Signup/>} />
          <Route path="/wishlist"       element={<Wishlist/>} />
<<<<<<< HEAD


=======
          <Route path="/cart"           element={<Cart/>} />
          <Route path="/orders"         element={<Orders/>} />
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
        </Routes>
        <Toast position="bottom-right"/>
      </div>
    </Router>
  );
}
export default App;