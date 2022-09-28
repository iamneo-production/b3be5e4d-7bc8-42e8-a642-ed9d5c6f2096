import './App.css';
// import { useEffect, useLayoutEffect } from 'react';
// import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Navbar, 
  Signup,
} from "./index"
import { Login } from './Pages/AutheticationPages/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;