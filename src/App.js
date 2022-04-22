import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
  );
}
