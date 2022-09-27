import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { ProductCard } from "./Components/Card/ProductCard"
export { Footer } from "./Components/Footer/Footer"

export { Signup } from "./Pages/AutheticationPages/Signup"
export { Login } from "./Pages/AutheticationPages/Login"




ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);