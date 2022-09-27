import './App.css';
import { useEffect, useLayoutEffect } from 'react';
// import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Navbar, 
  Signup,
} from "./index"

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;